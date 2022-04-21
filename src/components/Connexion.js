import React, { useContext } from 'react';
import { UserContext } from './UserContext';

import { Form, Input, Button, Checkbox } from 'antd';

const Connexion = () => {
    const { user, setUser } = useContext(UserContext);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                className="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input className="username"
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                className="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password className="password" />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" onClick={() => {
                    if (!document.getElementById("basic_username").value || !document.getElementById("basic_password").value) {
                        alert("Please input your username!")
                    } else {
                        setUser(document.getElementById("basic_username").value);
                    }
                }}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Connexion;
