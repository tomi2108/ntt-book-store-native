import BookCard from "components/Books/BookCard";
import Header from "components/Nav/Header";
import AppContext from "context/AppContext";
import { useContext } from "react";

import { ScrollView } from "react-native";


const Liked = () => {
  const { books,favorites } = useContext(AppContext);

  return (
    <>
      <Header title="Liked" displayUser/>
      <ScrollView  contentContainerStyle={{ padding:25  }}>
        {
          books.filter(b => favorites.includes(b.id)).map(b => <BookCard book={b} key={b.id}/> )
        }
      </ScrollView>
    </>
  );
};

export default Liked;