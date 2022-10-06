import BookItem from "components/Books/BookItem";
import SearchBar from "components/Search/SearchBar";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext, useEffect, useState } from "react";

import { ActivityIndicator, ScrollView } from "react-native";


const Home = () => {
  const [isLoading,setIsLoading] = useState(true);
  const { styles, books } = useContext(AppContext);

  useEffect(() => {
    if(books){
      setIsLoading(false);
    }
  },[books]);

  return (
    <>
      <SearchBar/>
      <ScrollView contentContainerStyle={{ padding:25  }}>
        {isLoading? <ActivityIndicator/>:
          <>
            <Text style={styles.home.title}>Recently added</Text>
            <ScrollView snapToAlignment="start" decelerationRate={0} snapToInterval={280} horizontal showsHorizontalScrollIndicator={false}>
              {
                [...books].reverse().slice(0,5).map((b) => <BookItem key={b.id} book={b}/>)
              }
            </ScrollView>
          </>
        }
      </ScrollView>
    </>
  );
};

export default Home;