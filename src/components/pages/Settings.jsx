import Moon from "components/Icons/Moon.svg";
import PowerSwitch from "components/Icons/PowerSwitch.svg";
import Sun from "components/Icons/Sun.svg";
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
        <OptionBoolean value={theme==="DARK"} onValueChange={toggleTheme} title={`${styles.notTheme} mode`}
          IconOn={<Sun height={26} width={26} fill={styles.icon.color} />}
          IconOff ={<Moon height={26} width={26} fill={styles.icon.color} />} />
        { user && <Option onPress={handleLogOut} title="Log out" Icon={<PowerSwitch height={26} width={26} fill={styles.icon.color} />} />}
      </ScrollView>
    </>
  );
};

export default Settings;