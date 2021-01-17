import * as React from "react";
import {Component} from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <ul className="horizontal">
                <Link to={"/"}><Button type="text"><li>Home</li></Button></Link>
                <Link to={"/test"}><Button type="text"><li>Link 1</li></Button></Link>
                <Link to={"/login"}><Button type="text"><li>Link 2</li></Button></Link>
            </ul>
        );
    }
}

export default Navigation;
