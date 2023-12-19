import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import StackNavigator from './navigation/StackNavigator';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StackNavigator/>
      
    </>
  )
}

export default App

const styles = StyleSheet.create({})