import Link from "components/utils/Link";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";

const FormFooter = ({ text,title,onPress }) => {
  const { styles } = useContext(AppContext);

  
  return (
    <>
      <Text style={styles.form.footer.text}>{text}</Text>
      <Link style={styles.form.footer.link} title={title} onPress={onPress}/>
    </>
  );
};

export default FormFooter;