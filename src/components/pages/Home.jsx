import BookDisplay from "components/Books/BookDisplay";
import FeaturedBooks from "components/Books/FeaturedBooks";
import HeaderWithCart from "components/Nav/HeaderWithCart";
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
      <HeaderWithCart title="Ntt bookstore" displayUser/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.home.container}>
        {isLoading? <ActivityIndicator/>:
          <>
            <Text style={styles.home.title}>Recently added</Text>
            <FeaturedBooks books={[...books].reverse().slice(0,5)}/>
            <Text style={styles.home.title}>Featured</Text>
            {
              books.slice(0,5).map((b) => <BookDisplay key={b.id} item={b} likeButton={false}/>)
            }
          </>
        }
      </ScrollView>
    </>
  );
};

export default Home;