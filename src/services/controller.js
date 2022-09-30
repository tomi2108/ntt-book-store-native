export const host = "http://ntt-bookstore.herokuapp.com";

export let token = null;

export const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};