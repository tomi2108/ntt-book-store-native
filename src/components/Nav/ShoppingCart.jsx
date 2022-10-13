import ShoppingCartIcon from "components/Icons/ShoppingCart.svg";
import Cart from "components/pages/Cart";
import AppContext from "context/AppContext";
import { useModal } from "hooks/utils/useModal";
import { useContext } from "react";
import { Modal, TouchableOpacity } from "react-native";


const ShoppingCart = () => {
  const { styles } = useContext(AppContext);
  const { modal, showModal,hideModal } = useModal();

  return (
    <>
      <TouchableOpacity onPress={showModal} >
        <ShoppingCartIcon width={30} height={30} stroke={styles.icon.color}/>
      </TouchableOpacity>
      <Modal  animationType="slide" presentationStyle="fullScreen" visible={modal} onRequestClose={hideModal}>
        <Cart hideModal={hideModal}/>
      </Modal>
    </>
  );
};

export default ShoppingCart;