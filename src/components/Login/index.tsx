import * as React from 'react';
import {Button, Checkbox, Form, Input, notification} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons/lib";

type Props = {};
type State = {};

export class Login extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }

    private onFinish(values: any) {
        notification.success({message: 'Success', description: 'Form has been completed successfully', duration: 5});
        console.log('Success:', values);
    };

    private onFinishFailed(errorInfo: any) {
        notification.error({message: 'Error', description: 'Form has not been filled correctly', duration: 5});
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Form
                layout={"vertical"}
                name="basic"
                initialValues={{remember: true}}
                onFinishFailed={this.onFinishFailed}
                requiredMark={"optional"}
            >
                <Form.Item
                    name="mail"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input prefix={<MailOutlined/>} size={"large"} placeholder={"E-Mail"}/>
                </Form.Item>

                <Form.Item
                    name="pass"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password prefix={<LockOutlined/>} size={"large"} placeholder={"Password"}/>
                </Form.Item>

                <Form.Item className={"centered"} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item className={"centered"}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        );
    };
}
