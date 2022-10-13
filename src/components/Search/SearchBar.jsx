import ShoppingCart from "components/Nav/ShoppingCart";
import UserDisplay from "components/User/UserDisplay";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { TextInput, View } from "react-native";


const SearchBar = () => {
  const { styles } = useContext(AppContext);

  return (
    <View style={styles.header.container} >
      <View style={ styles.header.searchBar}>
        <TextInput placeholder="🔍 Search..." placeholderTextColor={styles.header.searchBar.placeHolderColor} style={styles.header.input} />
        <ShoppingCart/>
      </View>
      <UserDisplay/>
    </View>
  );
};

export default SearchBar;