import { styledtheme } from "styles/styles";

import { useEffect, useState } from "react";
import { Platform, StatusBar } from "react-native";


export const useTheme = (themeStorage) => {
  const [theme,setTheme] = useState(null);
  const [styles, setStyle] = useState(styledtheme(theme));

  const getLocalTheme = async () => {
    const localTheme = await themeStorage.getTheme();
    if(!localTheme) await themeStorage.toggleTheme();
    const preferedTheme = await themeStorage.getTheme();
    setTheme(preferedTheme);
    setStyle(styledtheme(preferedTheme));
    updateStatusBar(preferedTheme);
  };

  const updateStatusBar = (mode) => {
    const [backgroundColor,barStyle] = mode==="LIGHT"? ["#ddd","dark"]:["#303134","light"];
    if(Platform.OS === "android") StatusBar.setBackgroundColor(backgroundColor);
    StatusBar.setBarStyle(`${barStyle}-content`,true);
  };


  useEffect(() => {
    getLocalTheme();
  }, []);

  useEffect(() => {
    if(theme){
      updateStatusBar(theme);
      setStyle(styledtheme(theme));
    }
  }, [theme]);

  const toggleTheme = async () => {
    await themeStorage.toggleTheme();
    setTheme(await themeStorage.getTheme());
  };

  return { styles, theme, toggleTheme };
};
