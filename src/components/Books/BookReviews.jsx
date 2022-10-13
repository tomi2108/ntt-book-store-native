import BookReviewModal from "components/Books/BookReviewModal";
import Review from "components/Reviews/Review";
import Button from "components/utils/Button";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useModal } from "hooks/utils/useModal";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";

const BookReviews = ({ bookReviews,bookId }) => {
  const { user,styles } = useContext(AppContext);

  const { modal,showModal,hideModal } = useModal();


  const [reviews,setReviews] = useState(bookReviews);
  const [reviewed,setReviewed] = useState(false);


  useEffect(() => {
    setReviews(bookReviews);
  }, [bookReviews]);


  useEffect(() => {
    if(user){
      setReviewed(reviews?.some((r) => r.User.username === user.username));
    }
  },[reviews,user]);

  const sortByDate = (a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  };


  return (
    <>
      <View style={styles.review.button}>
        {!user? null:
          reviewed? <Text>You have already reviewed this book</Text> :
            <Button title="Add review" onPress={showModal}/>
        }
      </View>
      {
        reviews &&
        reviews.sort(sortByDate).map((r) => <Review setReviews={setReviews}  key={r.id} review={r}/> )
      }
      <BookReviewModal setReviews={setReviews} bookId={bookId} modal={modal} hideModal={hideModal}/>
    </>
  );
};

export default BookReviews;