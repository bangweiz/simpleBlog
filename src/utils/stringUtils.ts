import {ArticleHeading} from "../types/articleHeading";

export const convertRowHeadings = (headings: string[]): ArticleHeading[] => {
    const convertedHeadings: ArticleHeading[] = []
    convertHelper(headings, convertedHeadings)
    return convertedHeadings
}

const convertHelper = (headings: string[], convertedHeadings: ArticleHeading[]) => {
    const map = new Map<number, number>()
    headings.forEach(heading => {
        if (heading.trim().startsWith("## ")) {
            convertedHeadings.push({
                tag: 'h2',
                label: heading.replace("## ", ""),
                children: []
            })
            if (map.has(1)) {
                map.set(1, (map.get(1) as number) + 1)
            } else {
                map.set(1, 0)
            }
        } else if (heading.startsWith("### ")) {
            const index = map.get(1)
            if (index !== undefined) {
                convertedHeadings[index].children.push({
                    tag: 'h3',
                    label: heading.replace("### ", ""),
                    children: []
                })
            }
            if (map.has(2)) {
                map.set(2, (map.get(2) as number) + 1)
            } else {
                map.set(2, 0)
            }
        } else if (heading.startsWith("#### ")) {
            const index1 = map.get(1)
            const index2 = map.get(2)
            if (index1 !== undefined && index2 !== undefined) {
                convertedHeadings[index1].children[index2].children.push({
                    tag: 'h4',
                    label: heading.replace("#### ", ""),
                    children: []
                })
            }
        }
    })
}