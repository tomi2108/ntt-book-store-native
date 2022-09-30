import Main from "components/Main";

import AppContext from "context/AppContext.js";

import { useBooks } from "hooks/appState/useBooks";
import { useCart } from "hooks/appState/useCart";
import { useTheme } from "hooks/appState/useTheme";
import { useUser } from "hooks/appState/useUser";
import { useFavorites } from "hooks/utils/useFavorites";

import { useEffect } from "react";
import { NativeRouter } from "react-router-native";

import ThemeStorage from "utils/ThemeStorage";
import UserStorage from "utils/UserStorage";


export default function App() {
  const userStorage = new UserStorage("UserStorage");
  const themeStorage = new ThemeStorage("ThemeStorage");
  const [user, userActions] = useUser(userStorage);
  const { theme, styles, toggleTheme } = useTheme(themeStorage);
  const [books] = useBooks();
  const [cart, cartActions] = useCart(user);
  const [favorites,favoritesActions] = useFavorites(user);
  const context = {  theme, styles, toggleTheme, user, userActions, cart, cartActions, favorites, favoritesActions, books };

  useEffect(() => {
    userActions.getUser();
  },[]);

  return (
    <NativeRouter>
      <AppContext.Provider value={context}>
        <Main/>
      </AppContext.Provider>
    </NativeRouter>
  );
}


