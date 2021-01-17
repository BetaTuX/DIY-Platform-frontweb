import * as React from "react";
import {hot} from "react-hot-loader";
import "./../assets/scss/App.scss";
import AppBar from "./AppBar/AppBar";
import "../auth";
import LoadingButton from "./Button/LoadingButton";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path={"/(login)"}>
                            Login :)
                        </Route>
                        <Route>
                            <AppBar/>
                            <Route exact path={"/"}>
                                <h1>Hello World!</h1>
                                <p>Foo to the barz</p>
                                <img src={reactLogo.default} height="480"/>
                                <LoadingButton
                                    successCallback={() => {
                                        console.log("success")
                                    }}
                                    callConfig={{
                                        method: "get",
                                        url: "http://google.com",
                                        headers: ['Access-Control-Allow-Origin']
                                    }}>
                                    Custom button
                                </LoadingButton>
                            </Route>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
