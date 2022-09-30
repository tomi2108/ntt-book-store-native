import AppContext from "context/AppContext";

import { useContext } from "react";
import { Text as NativeText } from "react-native";


const Text = ({  style, ...props }) => {
  const { styles } = useContext(AppContext);
  const textStyle = [ styles.textComponent, style];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
