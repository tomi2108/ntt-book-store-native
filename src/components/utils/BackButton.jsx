import AppContext from "context/AppContext";
import Constants from "expo-constants";
import { useContext } from "react";
import { Platform, Pressable, View } from "react-native";


const BackButton = ({ onPress,style }) => {
  const { styles } = useContext(AppContext);

  const baseStyle = styles.backButton;
  const androidStyles = { ...baseStyle };
  const iosStyles = { ...baseStyle,marginTop:Constants.statusBarHeight };
  let backButtonStyle;
  if(Platform.OS==="android") backButtonStyle = androidStyles;
  if(Platform.OS==="ios") backButtonStyle = iosStyles;

  return (
    <Pressable style={[backButtonStyle,style]} onPress={onPress}>
      <View style={{ height:40,width:40,backgroundColor:"blue" }}></View>
    </Pressable>
  );
};

export default BackButton;