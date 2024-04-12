import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Counter from "./screens/counter";


export default function App(){
  console.log(1);
  
    return (
      <>
      <SafeAreaView style={styles.container}>
        <Counter></Counter>
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