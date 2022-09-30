import AppBar from "components/Nav/AppBar";
import Home from "components/pages/Home";
import Liked from "components/pages/Liked";
import New from "components/pages/New";
import More from "components/pages/Settings";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { ScrollView } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";


const Main = () => {
  const { styles } = useContext(AppContext);

  return (
    <>
      <ScrollView style={styles.main.container}>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/liked" element={<Liked/>} />
          <Route path="/new" element={<New/>} />
          <Route path="/more" element={<More/>} />
          <Route path="/*" element={<Navigate to="/home"/> } replace />
        </Routes>
      </ScrollView>
      <AppBar/>
    </>
  );
};


export default Main;