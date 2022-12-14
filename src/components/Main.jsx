import AppBar from "components/Nav/AppBar";
import BookDetails from "components/pages/BookDetails";
import Browse from "components/pages/Browse";
import Home from "components/pages/Home";
import Liked from "components/pages/Liked";
import Login from "components/pages/Login";
import Settings from "components/pages/Settings";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { View } from "react-native";
import { Navigate, Route, Routes, useMatch } from "react-router-native";

const Main = () => {
  const { styles } = useContext(AppContext);


  const id = useMatch("id");

  return (
    <>
      <View style={styles.main.container}>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/liked" element={<Liked/>} />
          <Route path="/browse" element={<Browse/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/book/:id" element={<BookDetails id={id}/>} />
          <Route path="/*" element={<Navigate to="/home"/> } replace />
        </Routes>
      </View>
      <AppBar/>
    </>
  );
};

export default Main;