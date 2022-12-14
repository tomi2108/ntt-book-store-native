import CartControls from "components/utils/CartControls";
import DisplayStock from "components/utils/DisplayStock";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import LikeButton from "./LikeButton";


const BookDisplay = ({ item,quantity,cart=false,likeButton=true }) => {
  const book = item.book ?? item;

  const { styles,redirect, user } = useContext(AppContext);

  return (
    <TouchableOpacity onPress={() => redirect(`/book/${book.id}`)} style={styles.bookDisplay.container}>
      <Image style={styles.bookDisplay.image} source={{ uri:book.imageUrl }} />
      <View style={styles.bookDisplay.details}>
        <Text style={styles.bookDisplay.title}>{book.title} {!cart?null:`x${quantity}`}</Text>
        {!cart && <Text style={styles.bookDisplay.author}>{`by ${book.Author.name}`}</Text>}
        {cart && <CartControls item={item}/> }
        { user && likeButton? <LikeButton style={styles.bookDisplay.likeButton} bookId={book.id} width={30} height={30} /> : <View/>}
        <DisplayStock style={styles.bookDisplay.stock} book={book}/>
        <Text style={[styles.priceText,styles.bookDisplay.price]}>{`$${book.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookDisplay;