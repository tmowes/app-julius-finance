import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../pages/Dashboard'
import TickersList from '../pages/TickersList'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#282836' },
      }}
    >
      <Screen name="TickersList" component={TickersList} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  </>
)

export default AppRoutes
