import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; 

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
       <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                  backgroundColor: "#333333"
              },
              headerTintColor: "#ffffff",
              headerTitleStyle: {
                  fontSize: 20,
                  fontWeight: 'bold'
              }
          }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Web View' }}
        />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  }
});

export default App;
