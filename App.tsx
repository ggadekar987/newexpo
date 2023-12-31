import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import PhoneLogin from "./src/screens/PhoneLogin";
import OTPLoginScreen from "./src/screens/OTPLoginScreen";
import PinCodeScreen from "./src/screens/PinCodeScreen";
import Home from "./src/screens/Home";
import "./src/translation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container2}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </View>
        <View style={[styles.box, styles.box3]}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </View>
    </Provider>
  );
}

function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

import React from "react";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const box_count = 3;
const box_height = height / box_count;

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
      <Stack.Screen name="OTPLogin" component={OTPLoginScreen} />
      <Stack.Screen name="PinCode" component={PinCodeScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    height: box_height,
  },
  box1: {
    height: "10%",

    backgroundColor: "#2196F3",
  },
  box2: {
    height: "70%",

    backgroundColor: "#8BC34A",
  },
  box3: {
    height: "20%",
    backgroundColor: "#e3aa1a",
  },
});
