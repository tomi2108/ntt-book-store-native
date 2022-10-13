import BookDisplay from "components/Books/BookDisplay";
import CheckOut from "components/Nav/CheckOut";
import Header from "components/Nav/Header";
import BackButton from "components/utils/BackButton";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { ScrollView, View } from "react-native";

const Cart = ({ hideModal }) => {
  const { cart,user,styles } = useContext(AppContext);

  return (
    <>
      <Header title={`${user.username}'s cart`}/>
      <BackButton onPress={() => hideModal()} />
      <ScrollView style={{ backgroundColor:styles.COLORS.background.primary }} showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor:styles.COLORS.background.primary }}>
        {
          cart.length > 0 ?
            cart.map((item) => <BookDisplay item={item} key={item.book.id} quantity={item.quantity} cart/>):
            <View>
              <Text style={{ fontSize:30,alignSelf:"center",paddingTop:20 }}>Your cart is empty</Text>
            </View>
        }
      </ScrollView>
      <CheckOut/>
    </>
  );
};

export default Cart;