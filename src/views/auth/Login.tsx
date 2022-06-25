import React from "react";
import {Form, Typography} from "antd";
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

    const onLogin = (value: LoginParam) => {
        login(value, () => navigate("/"))
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
                        <PrimaryButton type="submit" content="Login" style={{width: "100%"}} />
                    </Form.Item>
                </Form>
                <Text>
                    Do not have an account? Go to <Link to="/register">Register</Link>
                </Text>
            </FromContainer>
        </Container>
    )
}