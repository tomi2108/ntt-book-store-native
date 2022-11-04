import Cog from "components/Icons/Cog.svg";
import Heart from "components/Icons/Heart.svg";
import MagnifyingGlass from "components/Icons/MagnifyingGlass.svg";
import ShoppingBags from "components/Icons/ShoppingBags.svg";

import NavIcon from "components/Nav/NavIcon";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { View } from "react-native";


const AppBar = () => {
  const { styles, page, books } = useContext(AppContext);

  const DEFAULT_COLOR = styles.COLORS.details.primary;
  const HIGHLIGHT_COLOR = styles.COLORS.highlight;

  return (
    <View style={styles.footer.container}>
      {
        <>
          <NavIcon disabled={!books} text="Home" navigate="/home" Icon={<ShoppingBags height={30} width={30} fill={page==="home"?HIGHLIGHT_COLOR:DEFAULT_COLOR} />} />

          <NavIcon disabled={!books} text="Liked" navigate="/liked" Icon={<Heart height={30} width={30} fill={page==="liked"?HIGHLIGHT_COLOR:DEFAULT_COLOR} />} />

          <NavIcon disabled={!books} text="Browse" navigate="/browse" Icon={<MagnifyingGlass height={30} width={30} fill={page==="browse"?HIGHLIGHT_COLOR:DEFAULT_COLOR} />} />

          <NavIcon disabled={!books} text="Settings" navigate="/settings" Icon={<Cog height={30} width={30} fill={page==="settings"?HIGHLIGHT_COLOR:DEFAULT_COLOR} />} />
        </>
      }
    </View>
  );
};

export default AppBar;