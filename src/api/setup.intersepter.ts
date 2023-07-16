import axios from "axios";

let headers: any = {
  "Content-Type": "application/json"
};

export const BASE_URL =
  "https://crudcrud.com/api/9b323e3c25504322a22cc61d4d8ce0e7/unicorns";
const headerOption = {
  axios_option: {
    baseURL: `${BASE_URL}`,
    headers
  }
};

const axios_option = headerOption.axios_option;
const instance = axios.create(axios_option);

instance.interceptors.request.use(
  (request: any) => {
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (error: any) => {
    const err = {
      url: error?.toJSON().config.baseURL,
      body: JSON.parse(error?.toJSON().config.data)
    };
    return Promise.reject(err);
  }
);

export { instance as axios };
