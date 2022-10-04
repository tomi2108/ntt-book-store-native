import AppContext from "context/AppContext";
import { useContext, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const TRANSACTION_STATES = {
  PENDING:"PENDING",
  COMPLETE:"COMPLETE",
  ERROR:"ERROR"
};


const AddToCartButton = ({ book }) => {
  const { styles,cartActions,user } = useContext(AppContext);
  const [transaction,setTransaction] = useState(TRANSACTION_STATES.PENDING);
  const [loading,setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    cartActions.addToCart(book).then(() => {
      setLoading(false);
      setTransaction(TRANSACTION_STATES.COMPLETE);
      setTimeout(() => {
        setTransaction(TRANSACTION_STATES.PENDING);
      },2000);
    }).catch(() => {
      setLoading(false);
      setTransaction(TRANSACTION_STATES.ERROR);
      setTimeout(() => {
        setTransaction(TRANSACTION_STATES.PENDING);
      },3000);
    });
  };

  const outOfStock = book.copiesInStock === 0;
  const disabled = outOfStock || !user || transaction!== TRANSACTION_STATES.PENDING ;

  const pending = transaction === TRANSACTION_STATES.PENDING;
  const error =  transaction === TRANSACTION_STATES.ERROR;
  const complete = transaction === TRANSACTION_STATES.COMPLETE;

  const butonStyles = [
    styles.bookCard.button,
    disabled && styles.bookCard.buttonDisabled,
    complete && styles.bookCard.buttonComplete,
    error && styles.bookCard.buttonError
  ];

  return (
    <TouchableOpacity disabled={disabled || loading} style={butonStyles} onPress={handlePress}>
      { loading? <ActivityIndicator/> :
        pending?
          <Text style={styles.bookCard.buttonText}>+</Text>:
          complete?
            <Text style={styles.bookCard.buttonText}>✓</Text>:
            <Text style={styles.bookCard.buttonText}>⚠</Text>
      }
    </TouchableOpacity>
  );
};

export default AddToCartButton;