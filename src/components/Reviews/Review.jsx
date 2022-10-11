import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useContext } from "react";
import { View } from "react-native";
import Rating from "./Rating";

const Review = ({ review }) => {

  const { styles } = useContext(AppContext);

  return (
    <View style={styles.review.container}>
      <Text style={styles.review.username}>
        {review.User.username}
      </Text>
      <Text style={styles.review.text}>
        {review.text}
      </Text>
      <Text style={styles.review.rating}>
        <Rating disabled rating={review.rating} size={20}/>
      </Text>
    </View>
  );
};

export default Review;