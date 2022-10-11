import Rating from "components/Reviews/Rating";
import Review from "components/Reviews/Review";
import { useModal } from "hooks/utils/useModal";
import { useState } from "react";
import { Button, Modal } from "react-native";

const BookReviews = ({ book }) => {
  const { modal,showModal,hideModal } = useModal();

  const [rating,setRating] = useState(1);



  return (
    <>
      <Button title="Add review" onPress={showModal}/>
      {
        book.reviews?.map((r) => <Review  key={r.id} review={r}/> )
      }
      <Modal animationType="slide" presentationStyle="fullScreen" visible={modal} onRequestClose={hideModal} >
        <Rating onValueChange={(value) => setRating(value)} rating={rating} size={32} />
        <Button title="Send" onPress={() => {console.log(rating);}}/>
      </Modal>
    </>
  );
};

export default BookReviews;