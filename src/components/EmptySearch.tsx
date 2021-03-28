import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const EmptySearch = () => {
  return (
    <View style={styles.emptySearch}>
      <Text style={styles.emptySearchTxt}>Search for a movie...</Text>
    </View>
  );
};

export default EmptySearch;
