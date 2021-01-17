import * as React from "react";
import {Component} from "react";
import {Select, Skeleton} from "antd";
import Search from "antd/es/input/Search";
import Navigation from "./Navigation";

const {Option} = Select;


class AppBar extends Component {

    render() {
        const searchOptions = ['All', 'Category', 'User'];
        let rows = [];

        for (let i = 0; i < searchOptions.length; i++) {
            rows.push(<Option value={searchOptions[i]}>{searchOptions[i]}</Option>);
        }
        const searchelement = <Select defaultValue={searchOptions[0]}>{rows}</Select>;

        return (
            <nav className="navbar">
                <div className="logo">
                    <Skeleton avatar={{shape:"square", style: {padding:0}}} paragraph={{rows:0}} title={{width:150}}/>
                </div>
                <div className="searchBar">
                    <Search size="middle" addonBefore={searchelement} placeholder="Search"/>
                </div>
                <div className="navigationWrapper">
                    <Navigation/>
                </div>
                <div className="profileWrapper">
                    <Skeleton paragraph={{rows:0}} title={{width:120}} avatar/>
                </div>
            </nav>
        );
    }
}

export default AppBar;