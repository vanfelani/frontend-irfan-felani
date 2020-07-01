import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Row} from 'native-base';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  hiddenItem: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  unit: {
    backgroundColor: '#fff',
  },
  deleteButton: {
    color: 'red',
  },
});

export default styles;
