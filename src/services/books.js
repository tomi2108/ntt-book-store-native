import { host, token } from "services/controller.js";

import axios from "axios";


const url = `${host}/api/books`;

export const getBooks = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (_) {
    throw new Error("Error getting books");
  }
};

export const getBookById = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  } catch (_) {
    throw new Error("Error getting book by id");
  }
};

export const addReview = async (text,userId,rating,bookId) => {
  const config = {
    headers: { Authorization: token }
  };
  try {
    const res = await axios.post(`${url}/${bookId}/review`, { text,userId,rating },config);
    return res.data;
  }catch(_){
    throw new Error("Error adding review");
  }
};

export const deleteReview = async (id,bookId) => {
  const config = {
    headers: { Authorization: token }
  };
  try {
    const res = await axios.delete(`${url}/${bookId}/review/${id}`,config);
    return res.data;
  }catch(_){
    throw new Error("Error deleting review");
  }
};