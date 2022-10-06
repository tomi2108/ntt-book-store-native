import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { Pressable, View } from "react-native";


const NavIcon = ({ text, navigate, Icon }) => {
  const { styles, redirect, page } = useContext(AppContext);

  const DEFAULT_COLOR = styles.footer.text.color;
  const HIGHLIGHT_COLOR = styles.highlight;


  const handlePress = () => {
    redirect(navigate);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.footer.iconWrapper}>
        {Icon}
        <Text style={{ ...styles.footer.text, color:page===text?HIGHLIGHT_COLOR:DEFAULT_COLOR }}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default NavIcon;