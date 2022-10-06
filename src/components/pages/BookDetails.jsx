import Header from "components/Nav/Header";
import DisplayStock from "components/utils/DisplayStock";
import Text from "components/utils/Text";
import TransactionButton from "components/utils/TransactionButton";
import AppContext from "context/AppContext";
import { useBookById } from "hooks/utils/useBookById";
import { useContext } from "react";
import { ActivityIndicator, Image, ScrollView } from "react-native";
import { useParams } from "react-router-native";

const BookDetails = () => {
  const { styles, cartActions, user } = useContext(AppContext);
  const { id } = useParams();
  const { book,outOfStock } = useBookById(id);

  return (
    <>
      <Header title="" displayUser/>
      {
        !book? <ActivityIndicator/> :
          <>
            <ScrollView contentContainerStyle={styles.bookDetails.container}>
              <Image style={styles.bookDetails.image} source={{ uri:book.imageUrl }} />
              <Text style={styles.bookDetails.title}> {book.title}</Text>
              <Text style={styles.bookDetails.author}>{`By ${book.Author.name}`}</Text>
              <Text style={styles.bookDetails.description}>{book.description}</Text>
              <Text style={[styles.priceText,styles.bookDetails.price]}>{`$${book.price}`}</Text>
              <DisplayStock style={styles.bookDetails.stock}  book={book}/>
              <TransactionButton fontSize={20} style={styles.bookDetails.button} transaction={cartActions.addToCart} params={[book]} disabledWhen={!user || outOfStock } pendingLabel="Add to cart" completeLabel="Added" errorLabel="Not added" />
            </ScrollView>
          </>
      }
    </>

  );
};

export default BookDetails;