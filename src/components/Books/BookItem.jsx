import TransactionButton from "components/Books/TransactionButton";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { Image, View } from "react-native";


const BookItem = ({ book }) => {
  const { styles, user, cartActions } = useContext(AppContext);
  const outOfStock = book.copiesInStock === 0;

  return (
    <View style={styles.bookCard.container}>
      <Image style={styles.bookCard.image} source={{ uri:book.imageUrl }} />
      <View style={styles.bookCard.details}>
        <Text style={styles.bookCard.title}>{book.title}</Text>
        {outOfStock?
          <Text style={styles.bookCard.outOfStockText}>Out of stock </Text>:
          <Text style={styles.bookCard.stock}>{`${book.copiesInStock} in stock`}</Text>
        }
        <Text style={styles.bookCard.price}>{`$${book.price}`}</Text>
      </View>
      <TransactionButton style={styles.bookCard.button} params={[book]} transaction={cartActions.addToCart} disabledWhen={outOfStock || !user} pendingLabel="+" completeLabel="✓" errorLabel="⚠"/>
    </View>
  );
};

export default BookItem;