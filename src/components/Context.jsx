import Main from "components/Main";
import AppContext from "context/AppContext";
import { useBooks } from "hooks/appState/useBooks";
import { useCart } from "hooks/appState/useCart";

import { useRedirect } from "hooks/appState/useRedirect";
import { useTheme } from "hooks/appState/useTheme";
import { useUser } from "hooks/appState/useUser";
import { useFavorites } from "hooks/utils/useFavorites";
import { useEffect, useState } from "react";

import ThemeStorage from "utils/ThemeStorage";
import UserStorage from "utils/UserStorage";


const Context = () => {

  const themeStorage = new ThemeStorage("ThemeStorage");
  const userStorage = new UserStorage("UserStorage");

  const [books] = useBooks();
  const [cart, cartActions] = useCart(user);
  const [favorites,favoritesActions] = useFavorites(user);
  const [page,setPage] = useState("Home");
  const [user, userActions] = useUser(userStorage);

  const { theme, styles, toggleTheme } = useTheme(themeStorage);

  const redirect = useRedirect(setPage);


  const context = { redirect, page, theme, styles, toggleTheme, user, userActions, cart, cartActions, favorites, favoritesActions, books };

  useEffect(() => {
    userActions.getUser();
  },[]);

  return (
    <>
      <AppContext.Provider value={context}>
        <Main/>
      </AppContext.Provider>
    </>
  );
};


export default Context;