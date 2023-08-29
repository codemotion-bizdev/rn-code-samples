import React, { createRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from '@navigation/Auth';
import ParentTabNavigator from '@navigation/ParentTabNavigator';
import ChildTabNavigator from '@navigation/ChildTabNavigator';
import { SCREENS } from '@constants';
import Toast from 'react-native-toast-message';
import { View, Text, StyleSheet } from 'react-native';
import { ToastMessage } from '@components/common/Toast';

const rootNavigationRef: NavigationRef = createRef();

export const NavigationAction = {
  navigate: (name: string, params?: object) => {
    if (rootNavigationRef) {
      rootNavigationRef.current?.navigate(name, params);
    }
  },
  goBack: () => {
    if (rootNavigationRef && rootNavigationRef.current?.canGoBack()) {
      rootNavigationRef.current?.goBack();
    }
  },
  getScreenName: () => {
    if (rootNavigationRef) {
      return rootNavigationRef.current.getCurrentRoute().name;
    }
  },
};

const Stack = createStackNavigator();

const toastConfig = {
  success: (props) => {
    return <ToastMessage {...props} />;
  },
  error: (props) => {
    return <ToastMessage {...props} />;
  },
};

export default function RootNavigator({ authenticated }: RootNavigator): JSX.Element {
  const getAuthNavigator = () => AuthNavigator(authenticated);
  const getParentTabNavigator = () => ParentTabNavigator(authenticated);
  const getChildTabNavigator = () => ChildTabNavigator(authenticated);

  return (
    <NavigationContainer ref={rootNavigationRef}>
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
      <Stack.Navigator initialRouteName={SCREENS.STACK} headerMode={'none'}>
        <Stack.Screen name={SCREENS.STACK} component={getAuthNavigator} />
        <Stack.Screen name={SCREENS.PARENT_TAB} component={getParentTabNavigator} />
        <Stack.Screen name={SCREENS.CHILD_TAB} component={getChildTabNavigator} />
      </Stack.Navigator>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} topOffset={50} />
    </NavigationContainer>
  );
}

interface RootNavigator {
  authenticated: boolean;
}

type NavigationRef = React.RefObject<NavigationContainerRef> | null | undefined;
