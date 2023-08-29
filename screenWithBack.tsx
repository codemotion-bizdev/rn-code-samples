import React from 'react';
import { View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import { onBoarding } from '@constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '@store/reducer';

const ScreenWithBack = ({ children, backBlue = false, onBack = null }) => {
  const navigation = useNavigation();
  const loading = useSelector<RootState, boolean>((state) => state.register.loading);
  const loadingAuth = useSelector<RootState, boolean>((state) => state.auth.loginLoading);

  const handleGoBack = () => {
    if (onBack) {
      onBack();
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {!loading && !loadingAuth && (
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons
            style={[backBlue ? styles.blueIcon : styles.icon]}
            name="md-arrow-back"
            size={24}
          />
        </TouchableOpacity>
      )}

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: getStatusBarHeight() + 20,
    zIndex: 1,
    left: 20,
  },
  icon: {
    color: '#fff',
  },
  blueIcon: {
    color: onBoarding.mainBlue,
  },
});

export default ScreenWithBack;
