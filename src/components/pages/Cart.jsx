import BookDisplay from "components/Books/BookDisplay";
import CheckOut from "components/Nav/CheckOut";
import HeaderWithoutCart from "components/Nav/HeaderWithoutCart";
import BackButton from "components/utils/BackButton";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { ScrollView, View } from "react-native";

const Cart = ({ hideModal }) => {
  const { cart,user,styles } = useContext(AppContext);

  const emptyCart = cart.length === 0;

  return (
    <>
      <HeaderWithoutCart title={`${user.username}'s cart`}/>
      <BackButton onPress={() => hideModal()} />
      <ScrollView style={styles.cart.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.cart.container}>
        {
          !emptyCart?
            cart.map((item) => <BookDisplay item={item} key={item.book.id} quantity={item.quantity} cart/>):
            <View>
              <Text style={styles.cart.empty}>Your cart is empty</Text>
            </View>
        }
      </ScrollView>
      {!emptyCart && <CheckOut/>}
    </>
  );
};

export default Cart;