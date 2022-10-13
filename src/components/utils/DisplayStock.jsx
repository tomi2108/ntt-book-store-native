import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";

const DisplayStock = ({ book,style }) => {
  const { styles }= useContext(AppContext);
  const outOfStock = book.copiesInStock === 0;



  return (
    <>
      {outOfStock?
        <Text style={[styles.outOfStockText, style]}>Out of stock </Text>:
        <Text style={style}>{`${book.copiesInStock} in stock`}</Text>
      }
    </>
  );
};

export default DisplayStock;