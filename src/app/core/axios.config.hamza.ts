import axios, { AxiosRequestConfig } from 'axios';
import { ClientError } from '../models/errors/ClientError';
import { MessageResponse } from '../models/errors/response.dto';

const BASE_URL = `${process.env.REACT_APP_API_URL}`;

const standardConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    timeout: 10000,
};

const hamzaApi = (config?: AxiosRequestConfig) => {
    const instance = axios.create({
        ...config,
        ...standardConfig,
    });
    instance.interceptors.request.use(
        (request) => {
            return request;
        },
        (error) => {
            return Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            const result = error.response.data as MessageResponse<unknown>;
            return Promise.reject(
                new ClientError(
                    result.errorMessage,
                    error.response.status,
                    result.result,
                ),
            );
        },
    );
    return instance;
};

export default hamzaApi;
