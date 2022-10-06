import Header from "components/Nav/Header";
import Option from "components/Settings/Option";
import OptionBoolean from "components/Settings/OptionBoolean";
import Profile from "components/Settings/Profile";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { ScrollView } from "react-native";


const Settings = () => {
  const { styles,theme,toggleTheme,userActions,user } = useContext(AppContext);


  const handleLogOut = () => {
    userActions.logOut();
  };

  return (
    <>
      <Header title="Settings"/>
      <Profile/>
      <ScrollView contentContainerStyle={styles.settings.list}>
        <OptionBoolean value={theme==="DARK"} onValueChange={toggleTheme} title="Dark mode" />
        { user && <Option onPress={handleLogOut} title="Log out" />}
      </ScrollView>
    </>
  );
};

export default Settings;