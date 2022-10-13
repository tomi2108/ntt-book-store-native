import TextInput from "components/Forms/TextInput";
import Rating from "components/Reviews/Rating";
import Link from "components/utils/Link";
import AppContext from "context/AppContext";
import { useFields } from "hooks/utils/useFields";
import { useContext } from "react";
import { Modal, View } from "react-native";
import { addReview } from "services/books";

const BookReviewModal = ({ modal,hideModal,bookId,setReviews }) => {
  const { user,styles } = useContext(AppContext);

  const { reset,fields,textChange } = useFields({
    rating:{ value:1,order:0 },
    review:{ value:"",order:1 }
  });

  const handlePress = () => {
    addReview(fields.review.value,user.id,fields.rating.value,bookId).then((newReview) => {
      setReviews(reviews => [...reviews,{ ...newReview,  User: { username: user.username } }]);
    }
    );
    reset();
    hideModal();
  };



  return (
    <Modal animationType="slide" visible={modal} onRequestClose={hideModal} >
      <View style={styles.review.modal.container}>
        <TextInput field="review" fields={fields} textChange={textChange}/>
        <Rating style={styles.review.modal.rating} onValueChange={(value) => textChange(value,"rating")} rating={fields.rating.value} size={32} />

        <View style={styles.review.modal.buttonGroup}>
          <Link title="Cancel" style={styles.review.modal.button} error onPress={() => {
            reset();
            hideModal();
          }}/>
          <Link title="Publish" style={styles.review.modal.button} onPress={handlePress}/>
        </View>
      </View>
    </Modal>
  );
};

export default BookReviewModal;