import React from "react";
import styled from "@emotion/styled";
import {Form, Input, Typography} from "antd"
import {Link} from "react-router-dom";
import {breakpointVariables, colorVariables} from "../../config/style";
import {PrimaryButton} from "../../components/PrimaryButton";
import {useWebsiteTitle} from "../../utils/websiteUtils";

export const Register = () => {
    useWebsiteTitle("Register")
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <FromContainer>
                <Typography.Title level={2} style={{textAlign: "center"}}>
                    <strong>REGISTER</strong>
                </Typography.Title>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
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
                        name="nickname"
                        rules={[{ required: true, message: 'Please input your nickname!' }]}
                    >
                        <MyInput
                            placeholder="Nickname"
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
                        <PrimaryButton type="submit" content="Register" style={{width: "100%"}} />
                    </Form.Item>
                </Form>
                <Text>
                    Have an account? Go to <Link to="/login">Login</Link>
                </Text>
            </FromContainer>
        </Container>
    )
}

export const Container = styled.div`
  background-color: ${colorVariables.bodyBGColor};
  min-height: 100vh;
  position: relative;
`

export const FromContainer = styled.div`
  width: 36rem;
  height: 38rem;
  background-color: ${colorVariables.white};
  padding: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: .5rem;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

  @media screen and (max-width: ${breakpointVariables.mobile}) {
    width: 90%;
  }
`

export const MyInput = styled(Input)`
  height: 4rem;
  padding: 0 1.5rem;
`

export const MyInputPassword = styled(Input.Password)`
  height: 4rem;
  padding: 0 1.5rem;
`

export const Text = styled.div`
  text-align: center;
  font-size: 1.4rem;
`