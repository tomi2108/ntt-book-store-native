import Link from "components/utils/Link";
import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { View } from "react-native";

const Profile = () => {
  const { user, styles, cartActions, redirect } = useContext(AppContext);


  const cartLength = cartActions.getCartLength();

  return (
    <View style={styles.settings.profile}>
      <View style={styles.settings.profilePicture}></View>
      <View>
        <Text>{user?user.username:"Not logged in"}</Text>
        <Text>
          {
            user?`${cartLength} item${cartLength===1?"":"s"} in your cart`:
              <Link onPress={() => redirect("/login")} title="Log in"/>
          }
        </Text>
      </View>
    </View>




  );
};

export default Profile;