import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { Pressable, View } from "react-native";


const NavIcon = ({ text, navigate, Icon,disabled }) => {
  const { styles, redirect, page } = useContext(AppContext);


  const parsedText = text[0].toLowerCase() + text.substring(1);

  const DEFAULT_COLOR = styles.COLORS.details.primary;
  const HIGHLIGHT_COLOR = styles.COLORS.highlight;


  const handlePress = () => {
    redirect(navigate);
  };

  return (
    <Pressable disabled={disabled} onPress={handlePress}>
      <View style={styles.footer.iconWrapper}>
        {Icon}
        <Text style={{ ...styles.footer.text, color:page===parsedText?HIGHLIGHT_COLOR:DEFAULT_COLOR }}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default NavIcon;