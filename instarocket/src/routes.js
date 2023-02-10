import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logoImg from "../assets/logo.png";
import send from "../assets/send.png";
import New from "../src/pages/New";
import Feed from "./pages/Feed";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
/*import * as React from "react";
import { View, Text, Button, LogoTitle } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import New from "../src/pages/New";
import Feed from "./pages/Feed";
const Stack = createNativeStackNavigator();

function Myroutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Feed}
        options={{ title: "My home" }}
      />
    </Stack.Navigator>
  );
}

export default Myroutes;*/
