import Link from "components/utils/Link";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { View } from "react-native";



const CheckOut = () => {
  const { styles } = useContext(AppContext);
  return (
    <View style={styles.checkOut.container}>
      <Link style={styles.checkOut.link} title='Checkout'/>
    </View>
  );
};

export default CheckOut;