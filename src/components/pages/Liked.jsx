import BookDisplay from "components/Books/BookDisplay";
import HeaderWithoutCart from "components/Nav/HeaderWithoutCart";
import AppContext from "context/AppContext";
import { useContext } from "react";

import { ScrollView } from "react-native";


const Liked = () => {
  const { books,favorites } = useContext(AppContext);

  return (
    <>
      <HeaderWithoutCart title="Liked" displayUser/>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          books.filter(b => favorites.includes(b.id)).map(b => <BookDisplay item={b} key={b.id}/> )
        }
      </ScrollView>
    </>
  );
};

export default Liked;