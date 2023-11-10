import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
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
        console.error('err', error)
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
      throw err
    }))
    return res.data
  }
  async postAuth(endpoint: string, data: any, config: any) {
    const res = await this.authInstance.post(endpoint, data, config).catch((err => {
      throw err
    }))
    return res.data
  }

  // 
  async getData(endpoint: string) {
    try {
      const response = await this.axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async postData(endpoint: string, data: any, config: any = null) {
    try {
      const response = await this.axiosInstance.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async putData(endpoint: string, data: any, config: any = null) {
    try {
      const response = await this.axiosInstance.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteData(endpoint: string, data: any, config: any = null) {
    try {
      const response = await this.axiosInstance.delete(endpoint, data);
      return response.data;
    } catch (error) {
      throw error
    }
  }

}
