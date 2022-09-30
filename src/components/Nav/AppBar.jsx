import NavIcon from "components/Nav/NavIcon";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { View } from "react-native";


const AppBar = () => {
  const { styles } = useContext(AppContext);

  return (
    <View style={styles.footer.container}>
      <NavIcon text="Home" navigate="/home"  />
      <NavIcon text="Liked" navigate="/liked"  />
      <NavIcon text="New" navigate="/new" />
      <NavIcon text="More" navigate="/more" />
    </View>
  );
};

export default AppBar;