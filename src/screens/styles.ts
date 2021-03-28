import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../util/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: 5,
  },
  moviesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  poster: {
    width: wp('100%'),
    height: hp('45%'),
    resizeMode: 'cover',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 50,
  },
  titleView: {
    height: hp('10%'),
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: colors.oxfordBlue,
  },
  titleInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.oxfordBlue,
  },
  info: {
    fontSize: 18,
    color: colors.gray,
    marginBottom: 10,
  },
  orderTitle: {
    fontSize: 20,
    color: colors.black,
  },
  viewOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    height: hp('10%'),
  },
});

export default styles;
