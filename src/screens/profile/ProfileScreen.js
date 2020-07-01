import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://lh5.googleusercontent.com/EJHsRVB75eg5HbFGoXGd-0T1kB48Ne4Gh_oUHLdDXOJtbWTePOrQpFK433ndYnLx0nWS6hxdZ32EVwX8rVco=w1920-h902',
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Irfan Felani Fendy Pratama</Text>
            <Text style={styles.info}> Mobile developer</Text>
            <Text style={styles.description}>
              Nama Saya Irfan Felani, saya lulusan Universitas BSI Cikampek
              tahun 2019. Saya senang dengan hal-hal baru, mampu bekerja baik
              secara tim maupun individu.
            </Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => Linking.openURL('https://github.com/vanfelani')}>
              <Icon name="logo-github">
                <Text>Github</Text>
              </Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() =>
                Linking.openURL('https://twitter.com/ex_machina14')
              }>
              <Icon name="logo-twitter">
                <Text>Twitter</Text>
              </Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
