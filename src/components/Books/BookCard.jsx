import DisplayStock from "components/utils/DisplayStock";
import Text from "components/utils/Text";
import TransactionButton from "components/utils/TransactionButton";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { Image, TouchableOpacity, View } from "react-native";


const BookCard = ({ book }) => {
  const { styles, user, cartActions,redirect } = useContext(AppContext);
  const outOfStock = book.copiesInStock === 0;

  return (
    <TouchableOpacity onPress={() => redirect(`/book/${book.id}`)} style={styles.bookCard.container}>
      <Image style={styles.bookCard.image} source={{ uri:book.imageUrl }} />
      <View style={styles.bookCard.details}>
        <Text style={styles.bookCard.title}>{book.title}</Text>
        <DisplayStock style={styles.bookCard.stock} book={book}/>
        <Text style={[styles.priceText,styles.bookCard.price]}>{`$${book.price}`}</Text>
      </View>
      <TransactionButton fontSize={20} style={styles.bookCard.button} params={[book]} transaction={cartActions.addToCart} disabledWhen={outOfStock || !user} pendingLabel="+" completeLabel="✓" errorLabel="⚠"/>
    </TouchableOpacity>
  );
};

export default BookCard;