import Moon from "components/Icons/Moon.svg";
import PowerSwitch from "components/Icons/PowerSwitch.svg";
import HeaderWithoutCart from "components/Nav/HeaderWithoutCart";
import OptionBoolean from "components/Settings/OptionBoolean";
import Option from "components/Settings/OptionPressable";
import Profile from "components/Settings/Profile";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { ScrollView } from "react-native";


const Settings = () => {
  const { styles,theme,toggleTheme,userActions,user } = useContext(AppContext);


  const handleLogOut = () => {
    userActions.logOut();
  };

  const MoonIcon = <Moon height={26} width={26} fill={styles.COLORS.details.primary} />;

  return (
    <>
      <HeaderWithoutCart title="Settings"/>
      <Profile/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.settings.list}>
        <OptionBoolean value={theme==="DARK"} onValueChange={toggleTheme} title="Dark mode"
          IconOn={MoonIcon}
          IconOff ={MoonIcon} />
        { user && <Option onPress={handleLogOut} title="Log out" Icon={<PowerSwitch height={26} width={26} fill={styles.COLORS.details.primary} />} />}
      </ScrollView>
    </>
  );
};

export default Settings;