import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import FormPage from '../pages/FormPage';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#e5e5e5' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="FormPage" component={FormPage} />
  </App.Navigator>
);

export default AppRoutes;
