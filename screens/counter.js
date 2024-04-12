// Counter.js
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  const count = useSelector(state => state.count); // Access the count state
  const greet = useSelector(state => state.greet); // Access the count state
  const dispatch = useDispatch();
console.log(count,greet);
  return (
    <>
      <View>
        <Text>{count}</Text>
        <Text>{greet}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => dispatch({ type: 'increment' })}><Text>Increment</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => dispatch({ type: 'decrement' })}><Text>Decrement</Text></TouchableOpacity>
      </View>
    </>
  );
}
