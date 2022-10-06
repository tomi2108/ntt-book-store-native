import AppContext from "context/AppContext";
import { useContext } from "react";
import Text from "./Text";

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