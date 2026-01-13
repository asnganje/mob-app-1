import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput ({ onAddGoal, visible, modalToggler}) {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText) 
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image source={require("../assets/goal.png")} style={styles.image}/>
        <TextInput
          style={styles.textInput} 
          placeholder='Your course goals!'
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title='Add a goal'
              onPress={()=>{
                onAddGoal(enteredGoalText); 
                setEnteredGoalText("");
              }
              }
              color="#5e0acc"
            />

          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={modalToggler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center",
    gap:"2%",
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc",
    backgroundColor:"#311b6b"
  },
  textInput: {
    borderWidth:1,
    borderColor:"#e4d0ff",
    backgroundColor:"#e4d0ff",
    width:"70%",
    marginRight:8,
    color:"#120438",
    borderRadius:6,
    padding:16
  },
  button: {
    width:"40%",
    marginHorizontal:8
  },
  buttons: {
    flexDirection:"row-reverse"
  },
  image: {
    width:100,
    height:100,
    margin:20
  }
})