import Minus from "components/Icons/Minus.svg";
import Plus from "components/Icons/Plus.svg";
import Trashcan from "components/Icons/Trashcan.svg";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";

const CartControls = ({ item }) => {
  const { styles,cartActions } = useContext(AppContext);

  const handleRemove = () => {
    cartActions.removeFromCart(item);
  };

  const handleIncrease = () => {
    cartActions.addToCart(item.book);
  };

  const handleDecrease = () => {
    cartActions.removeOneFromCart(item);
  };


  return (
    <View style={{ flexDirection:"row",alignItems:"center",justifyContent:"center" }} >
      <TouchableOpacity style={{ marginBottom:5 }} onPress={handleDecrease} >
        <Minus width={25} height={25} fill={styles.COLORS.red}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRemove} >
        <Trashcan width={60} height={60} fill={styles.COLORS.details.primary}/>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginBottom:5 }} onPress={handleIncrease} >
        <Plus width={25} height={25} fill={styles.COLORS.green}/>
      </TouchableOpacity>
    </View>
  );
};

export default CartControls;