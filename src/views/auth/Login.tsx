import React, {useState} from "react";
import {Alert, Form, Typography} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {Container, FromContainer, MyInput, MyInputPassword, Text} from "./Register";
import {useAuth} from "../../utils/authUtils";
import {LoginParam} from "../../types/auth";
import {PrimaryButton} from "../../components/PrimaryButton";
import {useWebsiteTitle} from "../../utils/websiteUtils";

export const Login = () => {
    useWebsiteTitle("Login")
    const {login} = useAuth()
    const navigate = useNavigate();
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    const onLogin = async (value: LoginParam) => {
        setLoading(true)
        const user = await login(value)
        setLoading(false)
        if (user) {
            navigate('/')
        } else {
            setErr('Account and password do not match')
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <FromContainer>
                <Typography.Title level={2} style={{textAlign: "center"}}>
                    <strong>LOGIN</strong>
                </Typography.Title>
                {err && <Alert message={err} type="error" style={{marginBottom: "1.5rem"}} />}
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onLogin}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="account"
                        rules={[{ required: true, message: 'Please input your account!' }]}
                    >
                        <MyInput
                            placeholder="Account"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <MyInputPassword
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <PrimaryButton loading={loading} type="submit" content="Login" style={{width: "100%"}} />
                    </Form.Item>
                </Form>
                <Text>
                    Do not have an account? Go to <Link to="/register">Register</Link>
                </Text>
            </FromContainer>
        </Container>
    )
}