import BookDisplay from "components/Books/BookDisplay";
import HeaderWithoutCart from "components/Nav/HeaderWithoutCart";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";

import { ScrollView, View } from "react-native";


const Liked = () => {
  const { styles, books,favorites,user } = useContext(AppContext);

  const filteredBooks = books.filter(b => favorites.includes(b.id));


  return (
    <>
      <HeaderWithoutCart title="Liked" displayUser/>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          !user? <View>
            <Text style={styles.cart.empty}>Log in to see liked books</Text>
          </View>:
            filteredBooks.length === 0?  <View>
              <Text style={styles.cart.empty}>You have no liked books</Text>
            </View>:
              filteredBooks.map(b => <BookDisplay item={b} key={b.id}/> )
        }
      </ScrollView>
    </>
  );
};

export default Liked;