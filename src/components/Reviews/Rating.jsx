import { FontAwesome } from "@expo/vector-icons";
import AppContext from "context/AppContext";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";

const Rating = ({ rating, disabled, size, style, onValueChange=null }) => {

  const { styles } = useContext(AppContext);

  const [value,setValue] = useState(rating);
  const [display,setDisplay] = useState(null);

  const FullStar =(i) => <FontAwesome key={i} disabled={disabled} onPress={() => handlePress(i,true)} name="star" color={styles.COLORS.yellow } size={size} style={{ marginHorizontal:2 }}/>;
  const EmptyStar =(i) => <FontAwesome  key={i} disabled={disabled} onPress={() => handlePress(i,false)} name="star" color={styles.COLORS.details.primary} size={size} style={{ marginHorizontal:2 }}/>;

  const handlePress = (index) => {
    setValue(index+1);
  };

  useEffect(() => {
    let stars= [];
    if(value){
      for(let i=0;i<=value-1;i++){
        stars.push(FullStar(i));
      }

      if(stars.length < 5) {

        for(let i=stars.length;i<5;i++){
          stars.push(EmptyStar(i));
        }
      }
      setDisplay(stars);
    }
    if(onValueChange) onValueChange(value);
  },[value]);

  return (
    <View style={[{ flexDirection:"row" },style]}>
      {display}
    </View>
  );
};

export default Rating;