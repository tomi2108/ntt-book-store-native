import UserDisplay from "components/User/UserDisplay";
import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import ShoppingCart from "components/Nav/ShoppingCart";
import { useContext } from "react";
import { View } from "react-native";


const Header = ({ title,displayUser,displayCart }) => {
  const { styles } = useContext(AppContext);

  return (
    <View style={styles.header.container} >
      <View style={ styles.header.searchBar}>
        <Text style={styles.header.title} >{title}</Text>
        <View style={styles.header.cart}>
          {displayCart && <ShoppingCart/>}
        </View>
      </View>
      {displayUser && <UserDisplay/>}
    </View>
  );
};

export default Header;