import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { Pressable, View } from "react-native";


const OptionPressable = ({ onPress ,title,Icon }) => {
  const { styles } = useContext(AppContext);
  return (
    <Pressable style={styles.settings.options} onPress={onPress}>
      <View>
        <View  style={styles.settings.description}>
          {Icon}
          <Text style={styles.settings.optionTitle} >{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default OptionPressable;