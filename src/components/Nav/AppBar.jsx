import Heart from "components/Icons/Heart.svg";
import MagnifyingGlass from "components/Icons/MagnifyingGlass.svg";
import ShoppingBags from "components/Icons/ShoppingBags.svg";

import NavIcon from "components/Nav/NavIcon";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { View } from "react-native";


const AppBar = () => {
  const { styles, page } = useContext(AppContext);

  const DEFAULT_COLOR = styles.footer.text.color;
  const HIGHLIGHT_COLOR = styles.highlight;



  return (
    <View style={styles.footer.container}>
      <NavIcon text="Home" navigate="/home" Icon={<ShoppingBags height={30} width={30} fill={page==="Home"?HIGHLIGHT_COLOR:DEFAULT_COLOR} />} />
      <NavIcon text="Liked" navigate="/liked" Icon={<Heart height={30} width={30} fill={page==="Liked"?HIGHLIGHT_COLOR:DEFAULT_COLOR} />} />
      <NavIcon text="Browse" navigate="/browse" Icon={<MagnifyingGlass height={30} width={30} fill={page==="Browse"?HIGHLIGHT_COLOR:DEFAULT_COLOR} />} />
      <NavIcon text="More" navigate="/more" Icon={<Heart height={30} width={30} fill={page==="More"?HIGHLIGHT_COLOR:DEFAULT_COLOR} />} />
    </View>
  );
};

export default AppBar;