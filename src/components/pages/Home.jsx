import FeaturedBooks from "components/Books/FeaturedBooks";
import Header from "components/Nav/Header";
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
      <Header title="Ntt bookstore" displayUser/>
      <ScrollView contentContainerStyle={{ padding:25  }}>
        {isLoading? <ActivityIndicator/>:
          <>
            <Text style={styles.home.title}>Recently added</Text>
            <FeaturedBooks books={[...books].slice(0,5)}/>
          </>
        }
      </ScrollView>
    </>
  );
};

export default Home;