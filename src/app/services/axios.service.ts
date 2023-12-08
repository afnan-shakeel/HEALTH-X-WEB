import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  private axiosInstance: AxiosInstance;
  private authInstance: AxiosInstance;
  constructor() {
    this.authInstance = axios.create({
      baseURL: 'http://localhost:8009',
      timeout: 10000,
    });
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:8000',
      timeout: 10000,
    });
    this.setupInterceptors()
  }
  private setupInterceptors() {

    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        const auth_token = window.sessionStorage.getItem('token')
        config.headers["Content-Type"] = "application/json"
        config.headers["Access-Control-Allow-Origin"] = "*"
        if (auth_token) {
          config.headers.Authorization = `Bearer ${auth_token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error);
      }
    )

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.code === 'ERR_NETWORK' || error.code === 'ECONNABORTED' || error.code === 'ECONNREFUSED' ||
          error.code === 'ECONNRESET' || error.code === 'ENOTFOUND') {
          console.error('(server connection refused):', error.message);
        }
        if (error.response) {
          console.error('HTTP error status:', error.response.status);
          let message = error.response.data.responseStatus ? error.response.data.responseStatus.message : error.response.statusText
          console.error('Error response message:', message);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Request setup error:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  // auth api method
  async getAuth(endpoint: string) {
    const res = await this.authInstance.get(endpoint).catch((err => {
      if (axios.isCancel(err)) {
        console.log('Request canceled by user', err.message);
        // return
      }
      throw err
    }))
    return res.data
  }
  async postAuth(endpoint: string, data: any, config: any) {
    const res = await this.authInstance.post(endpoint, data, config).catch((err => {
      if (axios.isCancel(err)) {
        console.log('Request canceled by user', err.message);
        // return
      }
      throw err
    }))
    return res.data
  }

  // 
  async getData(endpoint: string) {
    try {
      const response = await this.axiosInstance.get(endpoint, { cancelToken: this.cancelTokenSource.token });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled by user', error.message);
        return
      }
      throw error;
    }
  }

  async postData(endpoint: string, data: any, config: any = null) {
    try {
      const response = await this.axiosInstance.post(endpoint, data, { ...config, cancelToken: this.cancelTokenSource.token });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled by user', error.message);
        return
      }
      throw error;
    }
  }

  async putData(endpoint: string, data: any, config: any = null) {
    try {
      const response = await this.axiosInstance.put(endpoint, data, { ...config, cancelToken: this.cancelTokenSource.token });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled by user', error.message);
        return
      }
      throw error;
    }
  }

  async deleteData(endpoint: string, data: any, config: any = null) {
    try {
      const response = await this.axiosInstance.delete(endpoint, { data: data, ...config, cancelToken: this.cancelTokenSource.token });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled by user', error.message);
        return
      }
      throw error
    }
  }

  private cancelTokenSource = axios.CancelToken.source();
  cancelRequest() {
    this.cancelTokenSource.cancel('Operation canceled by the user.');
    //  new CancelToken - one time use
    this.cancelTokenSource = axios.CancelToken.source();
  }
}
