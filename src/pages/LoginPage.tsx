import * as React from "react";
import {Component} from "react";
import {Button, Card} from "antd";
import {LeftOutlined} from "@ant-design/icons";
import {Login} from "../components/Login";
import {Register} from "../components/Register";
import {Link} from "react-router-dom";

const content = {
    log: <Login/>,
    reg: <Register/>,
}

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: window.location.pathname.slice(1, 4),
        };
    }

    state: {
        activeTab: string;
    }

    render() {
        return (
            <div className={"user_signin"}>
                <Link to={"/"} className={"back_btn"}><Button type={"text"} icon={<LeftOutlined/>}>Home</Button></Link>
                <div className={"container"}>
                    <Card
                        className={'hide-link'}
                        defaultActiveTabKey={this.state.activeTab}
                        tabList={[{tab: <Link to={"/login"}>Login</Link>, key: 'log'}, {
                            tab: <Link to={"/register"}>Register</Link>, key: 'reg'
                        }]}
                        onTabChange={key => {
                            this.setState({activeTab: key});
                        }}
                        tabProps={{centered: true, size: "large"}}
                    >
                        {content[this.state.activeTab]}
                    </Card>
                </div>
            </div>
        );
    }
}

export default LoginPage;
