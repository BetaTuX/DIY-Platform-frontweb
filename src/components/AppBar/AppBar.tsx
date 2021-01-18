import * as React from "react";
import {Component} from "react";
import {Select, Skeleton} from "antd";
import Search from "antd/es/input/Search";
import Navigation from "./Navigation";
import {AccountBarModule} from "./AccountBarModule";

const {Option} = Select;

class AppBar extends Component {

    render() {
        const searchOptions = ['All', 'Category', 'User'];
        let rows = [];

        for (let i = 0; i < searchOptions.length; i++) {
            rows.push(<Option value={searchOptions[i]} key={i}>{searchOptions[i]}</Option>);
        }
        const searchelement = <Select defaultValue={searchOptions[0]}>{rows}</Select>;

        return (
            <nav className="navbar">
                <div className="logo">
                    <Skeleton avatar={{shape:"square", style: {padding:0}}} paragraph={false} title={{width:150}}/>
                </div>
                <div className="searchBar">
                    <Search size="middle" addonBefore={searchelement} placeholder="Search"/>
                </div>
                <div className="navigationWrapper">
                    <Navigation/>
                </div>
                <div className="profileWrapper">
                    <AccountBarModule/>
                </div>
            </nav>
        );
    }
}

export default AppBar;
