import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountScreen from '../components/AccountScreen';
import MessagesScreen from '../screen/MessagesScreen';

const Stack = createStackNavigator();
export default  AccountNavigation=() =>{
    return(

  <Stack.Navigator 
  // mode='card'
  >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
    )  ;
}
