import BookDisplay from "components/Books/BookDisplay";
import SearchBar from "components/Search/SearchBar";
import AppContext from "context/AppContext";
import { useFields } from "hooks/utils/useFields";
import { useContext } from "react";

import { ScrollView } from "react-native";


const Browse = () => {

  const { books } = useContext(AppContext);

  const { fields, textChange } = useFields({ search:{ value:"",order:0 } });

  return (
    <>
      <SearchBar value={fields.search.value} textChange={textChange} />
      <ScrollView showsVerticalScrollIndicator={false} >
        {
          books.filter((book) => book.title.toLowerCase().includes(fields.search.value.toLowerCase())).map((b) => <BookDisplay likeButton={false} item={b} key={b.id} /> )
        }
      </ScrollView>
    </>

  );
};

export default Browse;