import Link from "components/utils/Link";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { View } from "react-native";



const CheckOut = () => {
  const { styles } = useContext(AppContext);
  return (
    <View style={{ height:90,width:"100%",backgroundColor:styles.COLORS.background.secondary,alignItems:"center",justifyContent:"center" }}>
      <Link style={{ fontSize:20 }} title='Checkout'/>
    </View>
  );
};

export default CheckOut;