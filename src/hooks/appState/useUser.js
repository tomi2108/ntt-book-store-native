import { logIn as serviceLogin } from "services/login.js";
import { getCart, getFavorites } from "services/users.js";

import { useState } from "react";


export const useUser = (userStorage) => {
  const [user,setUser] = useState(null);

  const logIn = async (username,password) => {
    try {
      const loggedUser = await serviceLogin(username,password);
      userStorage.setToken(loggedUser.token);
      userStorage.setUser(loggedUser);
      setUser(loggedUser);
    }catch(err){
      throw new Error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    userStorage.clearUser();
    userStorage.clearToken();
  };

  const getUser = async () => {
    const userLocal = await userStorage.getUser();
    if (userLocal) {
      await userStorage.setToken(userLocal.token);
      const cart = await getCart(userLocal);
      const favorites = await getFavorites(userLocal);
      const completeUser = { ...userLocal, cart , favorites };
      await userStorage.setUser(completeUser);
      setUser(completeUser);
    } else {
      setUser(null);
    }
  };

  return [user, { logIn, logOut, getUser }];
};
