import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Counter from "./screens/counter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, thunkMiddleaware } from "./src/reducer";
import { thunk } from "redux-thunk";

export default function App(){
  // console.log(1);
  const count = useSelector((state) => {return state.counter.count;}); // Access the count state
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
        <TouchableOpacity onPress={() => dispatch(increment())}><Text>Increment</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => dispatch(decrement())}><Text>Decrement</Text></TouchableOpacity>
      </View>
      {/* <View>
        <TouchableOpacity onPress={() => dispatch(thunkMiddleaware())}><Text>Timer</Text></TouchableOpacity>
      </View> */}
      <View>
        {/* <TouchableOpacity onPress={() => dispatch(thunkMiddleaware())}><Text>Thunk Timer</Text></TouchableOpacity> */}
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

