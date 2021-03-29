import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootState} from '../store/store';
import AppStatusBar from '../components/AppStatusBar';
import If from '../components/If';
import Loading from '../components/Loading';
import {MovieItem, MovieDetails} from '../model/models';
import MoviesService from '../service/movies';
import styles from './styles';
import {colors} from '../util/colors';

interface Props {
  route: any;
}
const Details = ({route}: Props) => {
  const movie: MovieItem = route.params.movie;
  const {value} = useSelector((state: RootState) => state.apiKey);
  const [details, setDetails] = useState<MovieDetails>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDetails = async () => {
      const detailData: any = await MoviesService.getMoviesData(
        `?i=${movie.imdbID}&plot=full&apikey=${value}`,
      );

      if (detailData.Response === 'True') {
        setDetails(detailData);
      }
      setLoading(false);
    };

    getDetails();
  }, []);

  return (
    <View style={styles.container}>
      <If condition={loading}>
        <Loading />
      </If>
      <ScrollView>
        <AppStatusBar />
        <If condition={!loading}>
          <Image style={styles.poster} source={{uri: details.Poster}} />
          <View style={styles.content}>
            <View style={styles.titleView}>
              <Text style={styles.title}>
                {details.Title} ({details.Year})
              </Text>
            </View>
            <Text style={styles.titleInfo}>Genre</Text>
            <Text style={styles.info}>
              {details.Genre} {details.imdbRating}{' '}
              <FontAwesome name="star" size={20} color={colors.orangeWeb} />
            </Text>
            <Text style={styles.titleInfo}>Director</Text>
            <Text style={styles.info}>{details.Director}</Text>
            <Text style={styles.titleInfo}>Runtime</Text>
            <Text style={styles.info}>{details.Runtime}</Text>
            <Text style={styles.titleInfo}>Country</Text>
            <Text style={styles.info}>{details.Country}</Text>
            <Text style={styles.titleInfo}>Plot</Text>
            <Text style={styles.info}>{details.Plot}</Text>
          </View>
        </If>
      </ScrollView>
    </View>
  );
};

export default Details;
