import Text from "components/utils/Text";


const BookItem = ({ item }) => {
  return (
    <>
      <Text>
        {item.title}
      </Text>
    </>
  );
};

export default BookItem;