import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { Switch, View } from "react-native";


const OptionBoolean = ({ value,onValueChange,title }) => {
  const { styles } = useContext(AppContext);
  return (
    <View style={styles.settings.options}>
      <View  style={styles.settings.description}>
        <View style={styles.settings.optionIcon}></View>
        <Text style={styles.settings.optionTitle} >{title}</Text>
      </View>
      <View style={styles.settings.optionButton}>
        <Switch onValueChange={onValueChange} value={value}/>
      </View>
    </View>
  );
};

export default OptionBoolean;