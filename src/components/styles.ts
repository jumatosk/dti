import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../util/colors';

const styles = StyleSheet.create({
  emptySearch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.platinum,
  },
  emptySearchTxt: {
    fontSize: 26,
    color: colors.oxfordBlue,
  },
  item: {
    width: wp('45%'),
    height: hp('38%'),
    backgroundColor: colors.oxfordBlue,
    overflow: 'hidden',
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 12,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  poster: {
    height: '75%',
    width: '100%',
    resizeMode: 'cover',
  },
  titleView: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    marginHorizontal: 2,
    textAlign: 'justify',
    color: colors.platinum,
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
