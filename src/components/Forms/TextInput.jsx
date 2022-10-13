import AppContext from "context/AppContext";
import { useContext } from "react";
import { TextInput as NativeTextInput } from "react-native";


const TextInput = ({ field,fields, secure, textChange }) => {

  const { styles }= useContext(AppContext);

  const value = fields[field].value;
  const placeholder = field.replace(/([A-Z])/g, " $1").replace(/^./, (firstLetter) => {
    return firstLetter.toUpperCase();
  }).trim();

  return (
    <NativeTextInput  placeholderTextColor={styles.COLORS.text.placeHolder} placeholder={placeholder} style={styles.form.text} value={value} onChangeText={(text) => textChange(text,field)} secureTextEntry={secure} />
  );
};

export default TextInput;