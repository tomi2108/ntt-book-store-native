import { host } from "services/controller.js";

import axios from "axios";


const url = `${host}/api/login`;

export const logIn = async (username, password) => {
  try {
    const res = await axios.post(`${url}/${username}`, { password });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};