import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {MovieItem} from '../model/models';
import styles from './styles';

interface Props {
  onPress: any;
  movie: MovieItem;
}

const Movie = ({onPress, movie}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.item} onPress={onPress}>
      <Image style={styles.poster} source={{uri: movie.Poster}} />
      <View style={styles.titleView}>
        <Text numberOfLines={2} style={styles.title}>
          {movie.Title}
        </Text>
        <Text style={styles.title}>{movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Movie;
