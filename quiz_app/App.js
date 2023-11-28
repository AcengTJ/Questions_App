import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Soal1 from './src/Soal1';
import Soal2 from './src/Soal2';
import Hasil from './src/Hasil';
import Home from './src/Home';

const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Soal1' component={Soal1} options={{headerShown : false}}/>

          <Stack.Screen name='Soal2' component={Soal2} options={{headerShown : false}}/>

          <Stack.Screen name='Hasil' component={Hasil} options={{headerShown: false}}/>

          <Stack.Screen name='Home' component={Home} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;