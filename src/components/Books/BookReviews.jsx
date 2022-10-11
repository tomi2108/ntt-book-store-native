import Review from "components/Reviews/Review";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useModal } from "hooks/utils/useModal";
import { useContext, useEffect, useState } from "react";
import { Button, View } from "react-native";
import BookReviewModal from "./BookReviewModal";

const BookReviews = ({ bookReviews,bookId }) => {
  const { user } = useContext(AppContext);

  console.log(bookReviews);

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
      <View style={{ marginVertical:15 }}>
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