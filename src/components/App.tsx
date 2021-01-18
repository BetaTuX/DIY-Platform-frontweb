import * as React from "react";
import {hot} from "react-hot-loader";
import "../assets/scss/App.less";
import AppBar from "./AppBar/AppBar";
import "../auth";
import LoadingButton from "./Button/LoadingButton";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "../pages/LoginPage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

//TODO: Improve 404 handling
    public render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path={"/(login|register)"}>
                            <LoginPage/>
                        </Route>
                        <Route>
                            <AppBar/>
                            <main>
                                <Switch>
                                    <Route exact path={"/"}>
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
                                    <Route path={"/404"} render={() => <div>404 ERROR: Page ont found!</div>}/>
                                    <Redirect to={"/404"}/>
                                </Switch>
                            </main>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
