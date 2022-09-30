import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { View } from "react-native";


const UserDisplay = () => {
  const { styles,user } = useContext(AppContext);
  return (
    <View style={styles.header.userContainer}>
      <Text>
        {
          !user? "Not logged in": `Logged in as ${user.username}`
        }
      </Text>
    </View>
  );
};

export default UserDisplay;