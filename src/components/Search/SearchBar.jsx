import ShoppingCart from "components/Nav/ShoppingCart";
import UserDisplay from "components/User/UserDisplay";

import AppContext from "context/AppContext";

import { useContext, useState } from "react";
import { TextInput, View } from "react-native";


const SearchBar = ({ value,textChange }) => {
  const { styles } = useContext(AppContext);
  const [focus,setFocus] = useState(false);


  return (
    <View style={styles.header.container} >
      <View style={ styles.header.searchBar}>
        <TextInput onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={(text) => textChange(text,"search")} value={value} placeholder="🔍 Search..." placeholderTextColor={styles.header.searchBar.placeHolderColor} style={[styles.header.input,{ width:focus?"100%":"85%" }]} />
        {!focus &&  <ShoppingCart/>}
      </View>
      <UserDisplay/>
    </View>
  );
};

export default SearchBar;