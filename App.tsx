import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Counter from "./screens/counter";
import { useDispatch, useSelector } from "react-redux";


export default function App(){
  // console.log(1);
  const count = useSelector((state) => {console.log(state.count,100);return state.count;}); // Access the count state
  // const greet = useSelector(state => state.greet); // Access the count state
  const dispatch = useDispatch();
    return (
      <>
      <SafeAreaView style={styles.container}>
      <View>
        <Text>{count}</Text>
        {/* <Text>{greet}</Text> */}
      </View>
      <View>
        <TouchableOpacity onPress={() => dispatch({ type: 'increment' })}><Text>Increment</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => dispatch({ type: 'decrement' })}><Text>Decrement</Text></TouchableOpacity>
      </View>
      </SafeAreaView>
      </>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  }
})

