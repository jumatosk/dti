import React, {Fragment, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import AppStatusBar from '../components/AppStatusBar';
import {Searchbar} from 'react-native-paper';
import MoviesService from '../service/movies';
import {MovieItem} from '../model/models';
import If from '../components/If';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import EmptySearch from '../components/EmptySearch';
import styles from './styles';
import {colors} from '../util/colors';

interface Props {
  navigation: any;
}

const Home = ({navigation}: Props) => {
  const {value} = useSelector((state: RootState) => state.apiKey);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [moviesList, setMoviesList] = useState<Array<MovieItem>>([]);

  const handleChangeText = (searchText: string): void => {
    setSearchQuery(searchText);
  };

  const handleSearch = async () => {
    setLoading(true);
    const moviesData: any = await MoviesService.getMoviesData(
      `?s=${searchQuery}&page=${1}&type=movie&apikey=${value}`,
    );
    if (moviesData.Response === 'True') {
      setMoviesList(moviesData.Search);
    }
    setLoading(false);
  };

  const orderAlphabetic = (): void => {
    const sortedMovies = moviesList.slice().sort((a: any, b: any) => {
      return a.Title > b.Title ? 1 : b.Title > a.Title ? -1 : 0;
    });
    setMoviesList(sortedMovies);
  };

  return (
    <Fragment>
      <AppStatusBar />
      <View style={styles.container}>
        <Searchbar
          placeholder="Search..."
          onChangeText={handleChangeText}
          value={searchQuery}
          onSubmitEditing={handleSearch}
        />
        <If condition={!moviesList.length && !loading}>
          <EmptySearch />
        </If>
        <If condition={loading}>
          <Loading />
        </If>
        <If condition={!loading && moviesList.length && searchQuery.length}>
          <View style={styles.viewOrder}>
            <Text style={styles.orderTitle}>Order by: </Text>
            <MaterialIcons
              name="sort-by-alpha"
              size={28}
              color={colors.oxfordBlue}
              onPress={() => orderAlphabetic()}
            />
          </View>
          <ScrollView>
            <View style={styles.moviesList}>
              {moviesList.map((item: MovieItem, index: number) => (
                <Movie
                  key={index}
                  onPress={() => navigation.navigate('Details', {movie: item})}
                  movie={item}
                />
              ))}
            </View>
          </ScrollView>
        </If>
      </View>
    </Fragment>
  );
};

export default Home;
