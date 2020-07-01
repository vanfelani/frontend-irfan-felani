import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 170,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  white: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#40E0B0',
    height: 200,
  },
  avatar: {
    width: wp('33%'),
    height: hp('18%'),
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 20,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: hp('10%'),
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  iconList: {
    marginTop: 20,
  },
  buttonList: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
  },
  icon: {
    fontSize: 28,
  },
  iconText: {
    fontSize: 16,
  },
  button: {
    marginBottom: 5,
  },
});

export default styles;
