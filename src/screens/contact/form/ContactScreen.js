import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findById, save} from '../../../actions/contacts';
import {
  Text,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  Button,
  Item,
  ListItem,
  Icon,
  Left,
  Header,
  Title,
  Body,
  Right,
  Label,
  Input,
} from 'native-base';
import {showError} from '../../../utils/toast';
import styles from './styles';

class ContactScreen extends Component {
  constructor(props) {
    super(props);
    const {route} = this.props;
    this.state = {
      id: route.params?.id,
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
      error: null,
    };
  }

  componentDidMount() {
    const {id} = this.state;
    if (id) {
      this.props.findById(this.state.id);
    }
    this.setState({error: null});
  }

  componentDidUpdate(prevProps, prevState) {
    const {savedData, saveError, data, error, navigation} = this.props;
    if (prevProps.data !== data) {
      this.setState({...data.data});
    } else if (prevProps.savedData !== savedData) {
      navigation.goBack();
    } else if (error && prevProps.error !== error) {
      showError(error);
    } else if (saveError && prevProps.saveError !== saveError) {
      showError(saveError);

      this.setState({error: saveError});
    }
  }

  onChange = (name, value) => {
    this.setState({[name]: value});
  };

  onSubmit = () => {
    this.props.save(this.state);
  };

  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    const {navigation, loading, saveError} = this.props;
    const {id, firstName, lastName, age, photo} = this.state;
    let avatar = photo;
    if (avatar == '' || avatar == 'N/A') {
      avatar = 'https://www.freeiconspng.com/uploads/no-image-icon-0.png';
    }
    const image = {
      uri:
        'data:image/png;base64,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',
    };
    return (
      <>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                name="ios-arrow-back"
                onPress={() => this.props.navigation.goBack()}
              />
            </Button>
          </Left>

          <Body>
            <Title>Contact Detail</Title>
          </Body>
        </Header>
        <ScrollView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.header}>
            <ImageBackground source={image} style={styles.image} />
          </View>
          <Image
            style={styles.avatar}
            source={{
              uri: avatar,
            }}
          />
          <View style={styles.iconList}>
            <ListItem icon>
              {id && (
                <Item floatingLabel>
                  <Label>ID</Label>
                  <Input style={styles.input} disabled value={id} />
                </Item>
              )}
            </ListItem>
          </View>
          <View style={styles.iconList}>
            <ListItem icon>
              <Item floatingLabel>
                <Label>First Name</Label>
                <Input
                  style={styles.iconText}
                  value={firstName}
                  onChangeText={value => this.onChange('firstName', value)}
                  returnKeyType="next"
                />
              </Item>
            </ListItem>
          </View>
          <View style={styles.iconList}>
            <ListItem icon>
              <Item floatingLabel>
                <Label>Last Name</Label>
                <Input
                  style={styles.iconText}
                  value={lastName}
                  onChangeText={value => this.onChange('lastName', value)}
                  returnKeyType="next"
                />
              </Item>
            </ListItem>
          </View>
          <View style={styles.iconList}>
            <ListItem icon>
              <Item floatingLabel>
                <Label>Age</Label>
                <Input
                  style={styles.iconText}
                  value={age.toString()}
                  onChangeText={value => this.onChange('age', value)}
                  returnKeyType="next"
                  keyboardType="numeric"
                />
              </Item>
            </ListItem>
          </View>
          <View style={styles.iconList}>
            <ListItem icon>
              <Item floatingLabel>
                <Label>Photo</Label>
                <Input
                  style={styles.iconText}
                  value={photo}
                  onChangeText={value => this.onChange('photo', value)}
                  returnKeyType="done"
                />
              </Item>
            </ListItem>
          </View>
          <Button
            style={styles.button}
            full
            onPress={this.onSubmit}
            disabled={loading}>
            <Text>Save</Text>
          </Button>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => ({
  savedData: state.savedContact.data,
  saveError: state.savedContact.error,

  data: state.getContact.data,
  loading: state.getContact.loading || state.savedContact.loading,
  error: state.getContact.error,
});

const mapDispatchToProps = {
  findById,
  save,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactScreen);
