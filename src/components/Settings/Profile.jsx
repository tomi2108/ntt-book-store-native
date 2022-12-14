import ProfilePicture from "components/Icons/ProfilePicture.svg";
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
      <View style={styles.settings.profilePicture}>
        <ProfilePicture height={70} width={70} fill={styles.COLORS.highlight} />
      </View>
      <View>
        {user &&
          <Text style={styles.settings.username}>{user.username}</Text>
        }
        <Text style={styles.settings.userDetails}>
          {
            user?`${cartLength} item${cartLength===1?"":"s"} in your cart`:
              <Link style={styles.settings.login} onPress={() => redirect("/login")} title="Log in"/>
          }
        </Text>
      </View>
    </View>




  );
};

export default Profile;