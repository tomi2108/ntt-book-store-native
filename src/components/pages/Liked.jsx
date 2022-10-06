import Header from "components/Nav/Header";

import { ScrollView } from "react-native";


const Liked = () => {
  return (
    <>
      <Header title="Liked" displayUser/>
      <ScrollView  contentContainerStyle={{ padding:25  }}>

      </ScrollView>
    </>
  );
};

export default Liked;