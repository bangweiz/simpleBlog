import React, {ChangeEvent, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize"
import {Input, Modal, Select, Checkbox, Typography, Form, message} from "antd";
import MarkdownIt from "markdown-it";
import { stripHtml } from "string-strip-html";
import {useCategories} from "../utils/categoryUtils";
import {useTags} from "../utils/tagUtils";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import {PrimaryButton} from "../components/PrimaryButton";
import {PublishArticleParam} from "../types/article";
import {publishArticle} from "../service/articleService";
import {useNavigate} from "react-router-dom";
import {useWebsiteTitle} from "../utils/websiteUtils";

export const CreateView = () => {
    useWebsiteTitle("Create a Blog")
    const [value, setValue] = useState("**Hello world!!!**");
    const [title, setTitle] = useState('')
    const [titleErr, setTitleErr] = useState(false)
    const [category, setCategory] = useState('')
    const [categoryErr, setCategoryErr] = useState(false)
    const [tag, setTag] = useState<string[]>([])
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate();

    const {categories} = useCategories();
    const {tags} = useTags();

    const tagOptions = tags.map(tag => {
        return {label: tag.tagName, value: tag.id}
    })

    const onCategoryChange = (value: string) => {
        setCategory(value)
    }

    const onTagsChange = (checkedValues: CheckboxValueType[]) => {
        setTag(checkedValues as string[])
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    }

    const onMDChange = (value?: string, event?: ChangeEvent<HTMLTextAreaElement>, state?: any) => {
        if (typeof value === 'string') {
            setValue(value)
        }
    }

    const onSave = () => {
        if (!title || !value ) {
            setTitleErr(!title)
            return
        }
        setTitleErr(false)
        setOpenModal(true)
    }

    const onOk = async () => {
        if (!category) {
            setCategoryErr(true)
            return
        }
        setCategoryErr(false)
        const md = new MarkdownIt()
        const contentHtml = md.render(value)
        const param: PublishArticleParam = {
            title,
            summary: stripHtml(contentHtml).result.substring(0, 200),
            body: {
                content: value,
                contentHtml: contentHtml
            },
            category: {id: category},
            tags: tag.map(t => ({id: t})),

        }
        const id = await publishArticle(param)
        if (id) {
            navigate(`/article/${id}`)
        } else {
            message.error("Failed to publish article")
        }
    }

    return (
        <div>
            <Form.Item
                help={titleErr ? "Title is required" : ""}
                validateStatus={titleErr ? "error" : ""}
            >
                <Input
                    status={titleErr ? "error" : ""}
                    value={title}
                    onChange={onChange}
                    placeholder="Blog Title"
                />
            </Form.Item>
            <Form.Item style={{textAlign: "right"}}>
                <PrimaryButton content="Save" onClick={onSave} />
            </Form.Item>
            <div>
                <MDEditor
                    value={value}
                    onChange={onMDChange}
                    previewOptions={{
                        rehypePlugins: [[rehypeSanitize]],
                    }}
                    height={400}
                />
                <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap', padding: "1.5rem" }} />
            </div>
            <Modal
                title={<Typography.Title level={3}>Please Select Category and Tags</Typography.Title> }
                visible={openModal}
                onCancel={() => setOpenModal(false)}
                onOk={onOk}
            >
                <Form.Item
                    label="Category"
                    help={categoryErr ? "Category is required" : ""}
                    validateStatus={categoryErr ? "error" : ""}
                >
                    <Select
                        status={categoryErr ? "error" : ""}
                        id="category-input"
                        value={category}
                        onChange={onCategoryChange}
                        style={{width: "20rem"}}
                    >
                        <Select.Option value="">Please Select a Category</Select.Option>
                        {categories.map(category => <Select.Option key={category.id} value={category.id}>{category.categoryName}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Tags"
                >
                    <Checkbox.Group
                        value={tag}
                        options={tagOptions}
                        onChange={onTagsChange}
                    />
                </Form.Item>
            </Modal>
        </div>
    )
}
