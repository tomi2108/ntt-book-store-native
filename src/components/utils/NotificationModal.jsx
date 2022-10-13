import AppContext from "context/AppContext";
import { useContext } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";

const NotificationModal = ({ mode, modal,hideModal,children }) => {

  const { styles } = useContext(AppContext);

  const color = mode ==="error"? styles.COLORS.red:
    mode === "success"? styles.COLORS.green:
      styles.COLORS.background.secondary;

  return (
    <Modal transparent animationType="slide" visible={modal} onRequestClose={hideModal}>
      <TouchableWithoutFeedback accessible={false} onPress={hideModal}>
        <View style={{ height:"100%",width:"100%" }}/>
      </TouchableWithoutFeedback>
      <View style={[styles.notificationModal,{ backgroundColor:color }]}>
        {children}
      </View>
    </Modal>
  );
};

export default NotificationModal;