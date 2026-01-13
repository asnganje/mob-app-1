// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  function toggleModal() {
    setModalVisible((visible)=> !visible)
  }

  function addGoalHandler (enteredText) {
    setCourseGoals((goals)=>[{text:enteredText, id:Math.random().toString()}, ...goals])
    setModalVisible(false)
  }

  function deleteGoalHandler(id) {
    const updatedCourseGoals = courseGoals.filter((goal)=>goal.id !== id)
    setCourseGoals(updatedCourseGoals) 
  }

  return (
      <View style={styles.appContainer}>
        <Button title="Add a new goal" color="#5e0accc" onPress={toggleModal}/>
        <GoalInput 
          onAddGoal={addGoalHandler}
          visible = {modalVisible}
          modalToggler = {toggleModal}
        />
        <View style={styles.goalsContainer}>
          <Text>List of goals...</Text>
          <FlatList 
            data={courseGoals}
            renderItem={(itemData)=> {
            const { item } = itemData          
            return(
              <GoalItem
                item={item}
                onDeleteItem = {deleteGoalHandler}
              />
              )
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
        {/* <StatusBar style="auto" /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingBottom:"10%",
    paddingHorizontal:10
  },
  goalsContainer: {
    flex:5
  }
});
