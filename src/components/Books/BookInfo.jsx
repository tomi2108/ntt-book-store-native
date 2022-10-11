import DisplayStock from "components/utils/DisplayStock";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { Image } from "react-native";

const BookInfo = ({ book }) => {

  const { styles } = useContext(AppContext);

  return (
    <>
      <Image style={styles.bookDetails.image} source={{ uri:book.imageUrl }} />
      <Text style={styles.bookDetails.author}>{`By ${book.Author.name}`}</Text>
      <Text style={styles.bookDetails.description}>{book.description}</Text>
      <Text style={[styles.priceText,styles.bookDetails.price]}>{`$${book.price}`}</Text>
      <DisplayStock style={styles.bookDetails.stock}  book={book}/>
    </>
  );
};

export default BookInfo;