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
    addReview(fields.review.value,user.id,fields.rating.value,bookId).then((newReview) =>
      setReviews(reviews => [...reviews,{ ...newReview,  User: { username: user.username } }])
    );
    reset();
    hideModal();
  };



  return (
    <Modal animationType="slide" visible={modal} onRequestClose={hideModal} >
      <View style={{ height:"100%",justifyContent:"center", alignItems:"center",backgroundColor:styles.COLORS.background.primary }}>
        <TextInput field="review" fields={fields} textChange={textChange}/>
        <Rating style={{ marginVertical:25 }} onValueChange={(value) => textChange(value,"rating")} rating={fields.rating.value} size={32} />

        <View style={{ flexDirection:"row", width:"100%",justifyContent:"space-around",alignItems:"center" }}>
          <Link title="Cancel" style={{ fontSize:20 }} error onPress={() => {
            reset();
            hideModal();
          }}/>
          <Link title="Publish" style={{ fontSize:20 }} onPress={handlePress}/>
        </View>
      </View>
    </Modal>
  );
};

export default BookReviewModal;