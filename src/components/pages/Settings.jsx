import Header from "components/Nav/Header";
import Option from "components/Settings/Option";
import Profile from "components/Settings/Profile";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { View } from "react-native";


const Settings = () => {
  const { styles,theme,toggleTheme } = useContext(AppContext);

  return (
    <>
      <View>
        <Header title="Settings"/>
        <View style={styles.settings.container}>
          <Profile/>
          <View style={styles.settings.options}>
            <Option value={theme==="DARK"} onValueChange={toggleTheme} title="Dark mode" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Settings;