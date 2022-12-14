import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { Switch, View } from "react-native";


const OptionBoolean = ({ value,onValueChange,title,IconOn,IconOff,disabled }) => {
  const { styles } = useContext(AppContext);
  return (
    <View style={styles.settings.options} onPress={onValueChange}>
      <View  style={styles.settings.description}>
        {value?IconOn:IconOff}
        <Text style={styles.settings.optionTitle} >{title}</Text>
      </View>
      <View style={styles.settings.optionButton}>
        <Switch disabled={disabled} onValueChange={onValueChange} value={value}/>
      </View>
    </View>
  );
};

export default OptionBoolean;