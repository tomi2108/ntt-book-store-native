import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";


const OptionPressable = ({ onPress ,title,Icon,disabled }) => {
  const { styles } = useContext(AppContext);
  return (
    <TouchableOpacity disabled={disabled} style={styles.settings.options} onPress={onPress}>
      <View>
        <View  style={styles.settings.description}>
          {Icon}
          <Text style={styles.settings.optionTitle} >{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OptionPressable;