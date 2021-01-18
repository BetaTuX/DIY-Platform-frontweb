// @flow
import * as React from 'react';
import {Button, Form, Input} from "antd";
import rug from 'random-username-generator';
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons/lib";

type Props = {};
type State = {
    generatedUsername: string
};

export class Register extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            generatedUsername: this.generateUsername()
        };
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
        this.generateUsername = this.generateUsername.bind(this);
    }

    private generateUsername(): string {
        let character = '-';
        let name = rug.generate(character);
        let ret = '';

        name.split(character).forEach(word => {
            word = word[0].toUpperCase() + word.slice(1);
            ret += word;
        });
        return ret;
    }

    private onFinish(values: any) {
        console.log('Success:', values);
    };

    private onFinishFailed(errorInfo: any) {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Form
                layout={"vertical"}
                name="basic"
                initialValues={{remember: true}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                requiredMark={"optional"}
            >
                <Form.Item
                    initialValue={this.state.generatedUsername}
                    name="name"
                    rules={[
                        {required: true, message: 'Please input your username!'}
                    ]}
                >
                    <Input prefix={<UserOutlined/>} size={"large"} placeholder={"Username"} onFocus={(evt) => {evt.target.select()}}/>
                </Form.Item>
                <Form.Item
                    name="mail"
                    rules={[
                        {required: true, message: 'Please input your e-mail!'}, {
                            pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                            message: "E-Mail not valid!"
                        }
                    ]}
                >
                    <Input prefix={<MailOutlined/>} size={"large"} placeholder={"E-Mail"}/>
                </Form.Item>

                <Form.Item
                    name="pass"
                    rules={[
                        {required: true, message: 'Please input your password!'},
                        {min: 6, message: 'Must be minimum 6 characters'},
                        {whitespace: false, message: 'No whitespaces'},
                        {
                            pattern: /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$"/,
                            message: "Must contain at least 1 uppercase letter, 1 lowercase letter, 1 number"
                        }
                    ]}
                >
                    <Input.Password prefix={<LockOutlined/>} size={"large"} placeholder={"Password"}/>
                </Form.Item>

                <Form.Item className={"centered"}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    };
};
