import { axios } from "../../../api/setup.intersepter";

export const getAllUsers = () => {
  return axios({
    method: "GET"
    // url: "/9b323e3c25504322a22cc61d4d8ce0e7/unicorns"
  });
};

export const createUser = (body: any) => {
  return axios({
    method: "POST",
    data: { body }
  });
};
