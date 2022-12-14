import ShoppingCartIcon from "components/Icons/ShoppingCart.svg";
import Cart from "components/pages/Cart";
import AppContext from "context/AppContext";
import { useModal } from "hooks/utils/useModal";
import { useContext } from "react";
import { Modal, TouchableOpacity } from "react-native";


const ShoppingCart = () => {
  const { styles,user } = useContext(AppContext);
  const { modal, showModal,hideModal } = useModal();

  return (
    <>
      <TouchableOpacity disabled={!user} onPress={showModal} >
        <ShoppingCartIcon width={30} height={30} stroke={styles.COLORS.details.primary}/>
      </TouchableOpacity>
      <Modal  animationType="slide" presentationStyle="fullScreen" visible={modal} onRequestClose={hideModal}>
        <Cart hideModal={hideModal}/>
      </Modal>
    </>
  );
};

export default ShoppingCart;