import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";

const Notification = ({ show, message=null,style }) => {
  const { styles } = useContext(AppContext);
  return (
    <>
      {
        show? <Text style={[styles.notification,style]}>
          {message? message:show}
        </Text>: null
      }
    </>
  );
};

export default Notification;