import FeaturedBooks from "components/Books/FeaturedBooks";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";


const BookRecommendations = ({ book,recommendations }) => {
  const { styles } = useContext(AppContext);

  return (
    !book? <ActivityIndicator/> :
      <>
        <Text style={styles.bookDetails.title}>{`Other books by ${book.Author.name}`}</Text>
        <FeaturedBooks books={recommendations}/>
      </>
  );
};

export default BookRecommendations;