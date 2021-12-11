
import 'react-native-gesture-handler';
import React from 'react';
import SignInScreen from './app/src/views/screens/SignInScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './app/src/views/screens/SignUpScreen';
import OptionScreen from './app/src/views/screens/OptionScreen';
import ChatScreen from './app/src/views/screens/ChatScreen';
import ProfileScreen from './app/src/views/screens/ProfileScreen';
import Que from './app/src/views/screens/Question';
import symptom from './app/src/views/screens/Result';
import Quiz from './app/src/views/screens/quiz';


/*
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="SignIn"  component={SignInScreen} />
        <Stack.Screen name="SignUp"  component={SignUpScreen} />
        <Stack.Screen name="Option"  component={OptionScreen} />
        <Stack.Screen name="Interface" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
*/



import { View, Image } from "react-native";


const logo = {
  uri: 'https://image.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg'
};

function splashScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace("SignIn");
  }, 3000);
  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <Image
        source={logo}
        style={{
          flex: 1,
          // resizeMode,
          position: "absolute",
          width: "70%",
          height: "45%",
          borderRadius:35,
          borderWidth:2,
          justifyContent: "center"
        }}
      />
    </View>
  );
}
 
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        option={{ headerShown: false }}
        name="Home"
        component={splashScreen}
      />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp"  component={SignUpScreen} />
      <Stack.Screen name="Option"  component={OptionScreen} />
      <Stack.Screen name="Interface" component={ChatScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Question" component={Que} />
      <Stack.Screen name="checker" component={symptom} />
      <Stack.Screen name="Quiz" component={Quiz} />


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}



