import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {AppLoading} from 'expo';
import {useFonts} from 'expo-font';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Onboarding, DestinationDetail} from './src/screens';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

import {COLORS, SIZES, icons} from './src/constants';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer style={theme}>
        <Stack.Navigator initialRouteName="Onboarding">
          {/* screen  */}
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerLeft: null,
              headerRight: () => (
                <TouchableOpacity
                  style={{
                    marginRight: SIZES.padding,
                  }}
                  onPress={() => console.log('pressed!')}>
                  <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          {/* tabs  */}
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
