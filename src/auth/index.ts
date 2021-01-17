import axios from "axios";
import appConfig from "../../configs";

axios.interceptors.request.use(
    config => {
        const { origin } = new URL(config.url);
        const allowedOrigins = [appConfig.API_ENDPOINT];
        const token = localStorage.getItem('token');
        if (allowedOrigins.includes(origin)) {
            console.log("interceptor used");
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
