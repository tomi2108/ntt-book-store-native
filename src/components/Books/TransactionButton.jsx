import AppContext from "context/AppContext";
import { useContext, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const TRANSACTION_STATES = {
  PENDING:"PENDING",
  COMPLETE:"COMPLETE",
  ERROR:"ERROR"
};


const TransactionButton = ({ params, transaction,disabledWhen, style,pendingLabel,completeLabel,errorLabel }) => {
  const { styles } = useContext(AppContext);
  const [transactionState,setTransactionState] = useState(TRANSACTION_STATES.PENDING);
  const [loading,setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    transaction(...params).then(() => {
      setLoading(false);
      setTransactionState(TRANSACTION_STATES.COMPLETE);
      setTimeout(() => {
        setTransactionState(TRANSACTION_STATES.PENDING);
      },2000);
    }).catch(() => {
      setLoading(false);
      setTransactionState(TRANSACTION_STATES.ERROR);
      setTimeout(() => {
        setTransactionState(TRANSACTION_STATES.PENDING);
      },3000);
    });
  };

  const disabled = disabledWhen || transactionState!== TRANSACTION_STATES.PENDING ;

  const pending = transactionState === TRANSACTION_STATES.PENDING;
  const error =  transactionState === TRANSACTION_STATES.ERROR;
  const complete = transactionState === TRANSACTION_STATES.COMPLETE;

  const butonStyles = [
    styles.transactionButton.base,
    disabled && styles.transactionButton.disabled,
    complete && styles.transactionButton.complete,
    error && styles.transactionButton.error,
    style
  ];

  return (
    <TouchableOpacity disabled={disabled || loading} style={butonStyles} onPress={handlePress}>
      { loading? <ActivityIndicator/> :
        pending?
          <Text style={styles.bookCard.buttonText}>{pendingLabel}</Text>:
          complete?
            <Text style={styles.bookCard.buttonText}>{completeLabel}</Text>:
            <Text style={styles.bookCard.buttonText}>{errorLabel}</Text>
      }
    </TouchableOpacity>
  );
};

export default TransactionButton;