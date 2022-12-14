import Heart from "components/Icons/Heart.svg";
import AppContext from "context/AppContext";
import { useIsFavorite } from "hooks/utils/useIsFavorite";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";

const LikeButton = ({ style,bookId,width,height }) => {
  const { styles,favorites,favoritesActions } = useContext(AppContext);
  const isFavorite = useIsFavorite(bookId,favorites);

  const like = () => {
    if(isFavorite){
      favoritesActions.removeFromFavorites(bookId);
    }else{
      favoritesActions.addToFavorites(bookId);
    }
  };



  return (
    <TouchableOpacity style={style} onPress={like}>
      <Heart height={height} width={width} fill={isFavorite?styles.COLORS.red:styles.COLORS.details.primary}/>
    </TouchableOpacity>
  );
};

export default LikeButton;