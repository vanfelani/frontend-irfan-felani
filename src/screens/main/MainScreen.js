import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ContactsScreen} from '../contact';
import {ProfileScreen} from '../profile';

const Tab = createBottomTabNavigator();

class MainScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Tab.Navigator
        initialRouteName="Profile"
        activeColor="#97CCB9"
        inactiveColor="473f3f"
        style={{backgroundColor: '#FFFFF'}}>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Credit',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactsScreen}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-box"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default MainScreen;
