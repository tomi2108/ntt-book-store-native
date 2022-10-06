import BookCard from "components/Books/BookCard";

import { ScrollView } from "react-native";

const FeaturedBooks = ({ books }) => {
  return (
    <ScrollView snapToAlignment="start" decelerationRate={0} snapToInterval={280} horizontal showsHorizontalScrollIndicator={false}>
      {
        books.map((b) => <BookCard key={b.id} book={b}/>)
      }
    </ScrollView>
  );
};

export default FeaturedBooks;