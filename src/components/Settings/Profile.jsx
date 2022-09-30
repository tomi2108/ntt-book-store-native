import Link from "components/utils/Link";
import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { View } from "react-native";

const Profile = () => {
  const { styles, user, redirect } = useContext(AppContext);

  return (
    <View style={styles.settings.profile}>
      <View style={styles.settings.profilePicture}></View>
      <View>
        <Text>{user?user.username:"Not logged in"}</Text>
        <Text>
          {
            user?`${user.cart.length} items in your cart`:
              <Link onPress={() => redirect("/home")} title="Log in"/>
          }
        </Text>
      </View>
    </View>




  );
};

export default Profile;