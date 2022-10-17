import Link from "components/utils/Link";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { View } from "react-native";



const CheckOut = () => {
  const { styles,cart } = useContext(AppContext);

  const total = cart.reduce((prev,item) => Number(item.book.price)*item.quantity + prev,0);
  const formattedTotal = (Math.round(total * 100) / 100).toFixed(2);
  return (
    <View style={styles.checkOut.container}>
      <Link style={styles.checkOut.link} title='Checkout'/>
      <Text style={[styles.priceText,{ fontSize:22 }]}>{`$${formattedTotal}`}</Text>
    </View>
  );
};

export default CheckOut;