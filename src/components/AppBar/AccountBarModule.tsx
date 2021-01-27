import * as React from 'react';
import {getBoolean} from "../../utils/boolean";
import {Avatar, Button, Dropdown, Menu, Skeleton} from "antd";
import {DownOutlined, SmileTwoTone} from "@ant-design/icons/lib";
import {Link} from "react-router-dom";

type Props = {};
type State = {
    isLoggedIn: boolean,
    isLoading: boolean,
    username?: string,
    profile_pic_path?: string,
};

const menu = (
    <Menu>
        <Menu.Item>
            <span>Logout</span>
        </Menu.Item>
    </Menu>
)

export class AccountBarModule extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: getBoolean(localStorage.getItem('token')),
            isLoading: false,
        };
    }

    private loggedInModule() {
        return (
            <Skeleton loading={this.state.isLoading} paragraph={false} title={{width: 120}} avatar={{shape: "circle"}}>
                <Dropdown placement={"bottomRight"} className={'dropdown'} overlay={menu}>
                    <div>
                        <Avatar style={{backgroundColor: "deepskyblue"}} size={"large"}
                                icon={<SmileTwoTone twoToneColor={"dodgerblue"}/>}/>
                        <span className={"username-field"}>Username</span><DownOutlined className={"dropdown-icon"}/>
                    </div>
                </Dropdown>
            </Skeleton>
        )
    }

    private linkModule() {
        return (
            <>
                <Link to={'/register'}><Button className={"register-btn"} type={"ghost"}>Register</Button></Link>
                <Link to={'/login'}><Button className={"login-btn"} type={"text"}>Login</Button></Link>
            </>
        )
    }

    render() {
        return this.state.isLoggedIn ? this.loggedInModule() : this.linkModule();
    };
}
