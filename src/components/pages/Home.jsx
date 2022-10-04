import BookItem from "components/Books/BookItem";
import SearchBar from "components/Search/SearchBar";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext, useEffect, useState } from "react";

import { ActivityIndicator, ScrollView, View } from "react-native";


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
      <View style={{ padding:20  }}>
        {isLoading? <ActivityIndicator/>:
          <>
            <Text style={styles.home.title}>Popular</Text>
            <ScrollView snapToAlignment="start" decelerationRate={0} snapToInterval={280} horizontal showsHorizontalScrollIndicator={false}>

              {
                books.slice(0,4).map((b) => <BookItem key={b.id} book={b}/>)
              }

            </ScrollView>
          </>
        }
      </View>
    </>
  );
};

export default Home;