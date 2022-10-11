import Cross from "components/Icons/Cross.svg";
import ThreeDots from "components/Icons/ThreeDots.svg";
import Tick from "components/Icons/Tick.svg";
import Trashcan from "components/Icons/Trashcan.svg";
import OptionPressable from "components/Settings/OptionPressable";
import NotificationModal from "components/utils/NotificationModal";
import Text from "components/utils/Text";
import AppContext from "context/AppContext";
import { useModal } from "hooks/utils/useModal";
import { useContext, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { deleteReview } from "services/books";
import Rating from "./Rating";

const Review = ({ review,setReviews }) => {


  const { styles, user } = useContext(AppContext);

  const [loading,setLoading] = useState(false);
  const settingsModal = useModal();
  const confirmationModal = useModal();
  const errorModal = useModal();

  const formatedDateWithHour = new Date(review.createdAt).toLocaleString(
    "en-US",
    {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "America/Sao_Paulo"
    }
  );



  const handleDelete = () => {
    setLoading(true);
    deleteReview(review.id,review.bookId).then(() => {
      setLoading(false);
      settingsModal.hideModal();

      setTimeout(() => {
        confirmationModal.showModal();
        setTimeout(() => {
          confirmationModal.hideModal();
          setReviews(reviews => reviews.filter(r => r.id!==review.id));
        },2000);
      },500);
    })
      .catch(() => {

        setLoading(false);
        settingsModal.hideModal();

        setTimeout(() => {
          errorModal.showModal();
          setTimeout(() => {
            errorModal.hideModal();
          },2000);
        },500);

      });

  };

  return (
    <View style={styles.review.container}>
      <Text style={styles.review.username}>
        {review.User.username} - {formatedDateWithHour}
      </Text>
      <Text style={styles.review.text}>
        {review.text}
      </Text>
      <Text style={styles.review.rating}>
        <Rating disabled rating={review.rating} size={16}/>
      </Text>
      {user?.username === review.User.username &&
      <>

        <TouchableOpacity style={styles.review.options} onPress={settingsModal.showModal}>
          <ThreeDots height={20} width={20} fill={styles.COLORS.details.primary} />
        </TouchableOpacity>

        <NotificationModal hideModal={settingsModal.hideModal} modal={settingsModal.modal}>
          { loading? <ActivityIndicator/> :
            <OptionPressable onPress={handleDelete} title="Delete review" Icon={<Trashcan height={50} width={50} fill={styles.COLORS.details.primary}/>}/>
          }
        </NotificationModal>


        <NotificationModal mode="success" hideModal={confirmationModal.hideModal} modal={confirmationModal.modal}>
          <OptionPressable disabled title="Deleted successfully" Icon={<Tick height={20} width={20} fill={styles.COLORS.text.primary}/>}/>
        </NotificationModal>


        <NotificationModal mode="error" hideModal={errorModal.hideModal} modal={errorModal.modal}>
          <OptionPressable disabled title="Review already deleted" Icon={<Cross height={20} width={20} stroke={styles.COLORS.text.primary}/>}/>
        </NotificationModal>

      </>
      }
    </View>
  );
};

export default Review;