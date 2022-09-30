import NavIcon from "components/Nav/NavIcon";

import AppContext from "context/AppContext";

import { useContext, useState } from "react";
import { View } from "react-native";


const AppBar = () => {
  const { styles } = useContext(AppContext);
  const [selected,setSelected] = useState("Home");

  return (
    <View style={styles.footer.container}>
      <NavIcon text="Home" navigate="/home" setSelected={setSelected} selected={selected} />
      <NavIcon text="Liked" navigate="/liked" setSelected={setSelected} selected={selected} />
      <NavIcon text="New" navigate="/new" setSelected={setSelected} selected={selected} />
      <NavIcon text="More" navigate="/more" setSelected={setSelected} selected={selected} />
    </View>
  );
};

export default AppBar;