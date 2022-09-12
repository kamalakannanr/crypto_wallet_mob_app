import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Balance from './Balance';

const navigator = createStackNavigator (
  {
    Bal : Balance
  },
  {
    initialRouteName: "Bal",
    defaultNavigationOptions: {
      title: "TypeScript App",
    },
  }
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator)