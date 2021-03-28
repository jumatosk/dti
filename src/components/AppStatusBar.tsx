import React from 'react';
import {View, StatusBar, StyleSheet, Platform} from 'react-native';
import {colors} from '../util/colors';

const AppStatusBar = ({...props}: any) => {
  return (
    <View style={[styles.statusBar, {height: STATUSBAR_HEIGHT}]}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.white}
        {...props}
      />
    </View>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.white,
  },
});

export default AppStatusBar;
