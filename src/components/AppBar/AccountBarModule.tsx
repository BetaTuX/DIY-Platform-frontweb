import * as React from 'react';
import {getBoolean} from "../../utils/boolean";
import {Avatar, Dropdown, Menu, Skeleton} from "antd";
import {DownOutlined, SmileTwoTone} from "@ant-design/icons/lib";

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


    render() {
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
        );
    };
}
