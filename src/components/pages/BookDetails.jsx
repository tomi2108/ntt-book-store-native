import FeaturedBooks from "components/Books/FeaturedBooks";
import LikeButton from "components/Books/LikeButton";
import Header from "components/Nav/Header";
import DisplayStock from "components/utils/DisplayStock";
import Text from "components/utils/Text";
import TransactionButton from "components/utils/TransactionButton";
import AppContext from "context/AppContext";
import { useBookById } from "hooks/utils/useBookById";
import { useContext } from "react";
import { ActivityIndicator, Image, ScrollView, View } from "react-native";
import { useParams } from "react-router-native";

const BookDetails = () => {
  const { styles, cartActions, user,books } = useContext(AppContext);
  const { id } = useParams();
  const { book,outOfStock } = useBookById(id);

  return (
    <>
      {
        !book? <ActivityIndicator/> :
          <>
            <Header title={book.title} displayUser/>
            <ScrollView contentContainerStyle={styles.bookDetails.container}>
              <Image style={styles.bookDetails.image} source={{ uri:book.imageUrl }} />
              <Text style={styles.bookDetails.author}>{`By ${book.Author.name}`}</Text>
              <Text style={styles.bookDetails.description}>{book.description}</Text>
              <Text style={[styles.priceText,styles.bookDetails.price]}>{`$${book.price}`}</Text>
              <DisplayStock style={styles.bookDetails.stock}  book={book}/>
              <View style={styles.bookDetails.buttonContainer}>
                <LikeButton style={styles.bookDetails.likeButton} bookId={book.id}/>
                <TransactionButton fontSize={20} style={styles.bookDetails.addButton} transaction={cartActions.addToCart} params={[book]} disabledWhen={!user || outOfStock } pendingLabel="Add to cart" completeLabel="Added" errorLabel="Not added" />
              </View>
              <Text style={styles.bookDetails.title}>{`Other books by ${book.Author.name}`}</Text>
              <FeaturedBooks books={books.filter(b => b.Author.name===book.Author.name && b.id !== book.id)}/>
            </ScrollView>
          </>
      }
    </>

  );
};

export default BookDetails;