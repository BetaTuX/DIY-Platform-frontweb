import * as React from "react";
import {Component} from "react";
import {Button} from "antd";

class Navigation extends Component {
    render() {
        return (
            <ul className="horizontal">
                <Button type="text"><li>Home</li></Button>
                <Button type="text"><li>Link 1</li></Button>
                <Button type="text"><li>Link 2</li></Button>
            </ul>
        );
    }
}

export default Navigation;
