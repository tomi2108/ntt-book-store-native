import SearchBar from "components/Search/SearchBar";

import { ScrollView } from "react-native";


const Browse = () => {
  return (
    <>
      <SearchBar/>
      <ScrollView  contentContainerStyle={{ padding:25  }}>
      </ScrollView>
    </>

  );
};

export default Browse;