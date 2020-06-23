import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen/DetailScreen";
import routes from "./src/routes";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.home}>
        <Stack.Screen name={routes.home} component={HomeScreen} />
        <Stack.Screen
          name={routes.detail}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerTintColor: "#fff",
          }}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
