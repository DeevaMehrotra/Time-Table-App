import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import ViewScreen from './screens/ViewScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
