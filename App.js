import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Balance from './Balance';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Browser from './Browser';
import Shortcuts from './Shortcuts';
import Options from './Options';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Portfolio'>
      <Tab.Screen name="Browser" component={Browser}  />
      <Tab.Screen name="Portfolio" component={Balance}  />
      <Tab.Screen name="Shortcuts" component={Shortcuts}  />
      <Tab.Screen name="Options" component={Options}  />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
