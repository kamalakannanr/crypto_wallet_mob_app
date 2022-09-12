import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Balance from './Balance';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Browser from './Browser';
import Shortcuts from './Shortcuts';
import Options from './Options';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Portfolio'>
      <Tab.Screen name="Browser" component={Browser} options={{ tabBarIcon : ({ color, size }) => (
            <MaterialCommunityIcons name="globe-light" color={color} size={size}/>),
          }}/>
      <Tab.Screen name="Portfolio" component={Balance}  options={{ tabBarIcon : ({ color, size }) => (
            <MaterialCommunityIcons name="chart-pie" color={color} size={size}/>),
          }}/>
      <Tab.Screen name="Shortcuts" component={Shortcuts}  options={{ tabBarIcon : ({ color, size }) => (
            <MaterialCommunityIcons name="vector-link" color={color} size={size}/>),
          }}/>
      <Tab.Screen name="Options" component={Options}  options={{ tabBarIcon : ({ color, size }) => (
            <MaterialCommunityIcons name="more" color={color} size={size}/>),
          }}/>
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
