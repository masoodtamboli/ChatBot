/*import * as React from "react";
import { Button, View, Text, Image, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from './SignInScreen';


const HomeScreen = ({navigation}) => {
  return (
    const logo = {
      uri:
        "PASTE LOGO URL HERE"
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
              width: "30%",
              height: "30%",
              justifyContent: "center"
            }}
          />
        </View>
      );
    }
    
    
    function MyStack() {
      return (
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            option={{ headerShown: false }}
            name="Home"
            component={splashScreen}
          />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      );
    }






  );
};

export default HomeScreen;









































/*const logo = {
  uri:
    "PASTE LOGO URL HERE"
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
          width: "30%",
          height: "30%",
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
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}*/