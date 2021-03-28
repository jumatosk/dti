import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {colors} from '../util/colors';
import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color={colors.orangeWeb} />
    </View>
  );
};

export default Loading;
