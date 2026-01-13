import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem ({item, onDeleteItem}) {
  return(
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color:"#888888"}} onPress={()=>onDeleteItem(item.id)}>
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  )
}
export default GoalItem;

const styles = StyleSheet.create(
  {
    goalItem:{
    margin:8,
    borderRadius:6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color:"white",
    padding:8
  }
  }
)