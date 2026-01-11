// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler (enteredText) {
    setCourseGoals((goals)=>[{text:enteredText, id:Math.random().toString()}, ...goals])
  }
  return (
      <View style={styles.appContainer}>
        <GoalInput 
          onAddGoal={addGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <Text>List of goals...</Text>
          <FlatList 
            data={courseGoals}
            renderItem={(itemData)=> {
            const { item } = itemData          
            return(
              <GoalItem item={item}/>
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
