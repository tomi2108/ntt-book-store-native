import BookInfo from "components/Books/BookInfo";
import BookRecommendations from "components/Books/BookRecommendations";
import BookReviews from "components/Books/BookReviews";
import LikeButton from "components/Books/LikeButton";
import HeaderWithoutCart from "components/Nav/HeaderWithoutCart";
import TransactionButton from "components/utils/TransactionButton";
import AppContext from "context/AppContext";
import { useBookById } from "hooks/utils/useBookById";

import { useContext } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useParams } from "react-router-native";


const BookDetails = () => {
  const { styles, cartActions, user } = useContext(AppContext);
  const { id } = useParams();
  const { book,outOfStock,recommendations } = useBookById(id);

  return (
    <>
      {
        !book? <ActivityIndicator/> :
          <>
            <HeaderWithoutCart title={book.title} displayUser/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.bookDetails.container}>
              <BookInfo book={book}/>
              <View style={styles.bookDetails.buttonContainer}>
                { user? <LikeButton style={styles.bookDetails.likeButton} bookId={book.id} width={40} height={40}/> : <View/>}
                <TransactionButton fontSize={20} style={styles.bookDetails.addButton} transaction={cartActions.addToCart} params={[book]} disabledWhen={!user || outOfStock } pendingLabel="Add to cart" completeLabel="Added" errorLabel="Not added" />
              </View>
              {recommendations.length > 0 &&  <BookRecommendations book={book} recommendations={recommendations}/>}
              <BookReviews bookId={book.id} bookReviews={book.reviews}/>
            </ScrollView>
          </>
      }
    </>

  );
};

export default BookDetails;