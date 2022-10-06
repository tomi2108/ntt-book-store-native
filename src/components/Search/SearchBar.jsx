import UserDisplay from "components/User/UserDisplay";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { TextInput, View } from "react-native";

import ShoppingCart from "components/Icons/ShoppingCart.svg";

const SearchBar = () => {
  const { styles } = useContext(AppContext);

  return (
    <View style={styles.header.container} >
      <View style={ styles.header.searchBar}>
        <TextInput placeholder="🔍 Search..." placeholderTextColor={styles.header.searchBar.placeHolderColor} style={styles.header.input} />
        <ShoppingCart width={30} height={30} stroke={styles.icon.color}/>
      </View>
      <UserDisplay/>
    </View>
  );
};

export default SearchBar;