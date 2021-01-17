import * as React from "react";
import {Component} from "react";
import {Button} from "antd";
import axios, {AxiosRequestConfig} from "axios";

enum MethodType {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
}

class LoadingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    state: {
        isLoading: boolean;
    }

    props: {
        children: string;
        successCallback?: () => void;
        errorCallback?: () => void;
        finalizeCallback?: () => void;
        callConfig: AxiosRequestConfig;
    }

    public render() {
        return (
            <Button loading={this.state.isLoading} onClick={this.onBtnClick}>
                {this.props.children}
            </Button>
        );
    }

    private onBtnClick() {
        console.log('custom btn click');
        if (!this.props.callConfig)
            return;
        this.setState({isLoading: true});
        axios(this.props.callConfig)
            .then(() => {
                this.setState({isLoading: false});
                if (this.props.successCallback != undefined)
                    this.props.successCallback();
            })
            .catch(() => {
                this.setState({isLoading: false});
                if (this.props.errorCallback != undefined)
                    this.props.errorCallback();
            })
            .finally(() => {
                this.setState({isLoading: false});
                if (this.props.finalizeCallback != undefined)
                    this.props.finalizeCallback();
            });
    }
}

export default LoadingButton;
