import React, {Component} from 'react';
import {View, RefreshControl, Alert} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Content,
  Card,
  CardItem,
  Thumbnail,
  ListItem,
} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import {connect} from 'react-redux';
import {findAll, deleteById} from '../../../actions/contacts';
import styles from './styles';
import {showError} from '../../../utils/toast';

function RowServices({onPress, item, index, onDelete}) {
  let photo = item.photo;
  if (photo == 'N/A') {
    photo = 'https://www.freeiconspng.com/uploads/no-image-icon-0.png';
  }
  return (
    <ListItem
      style={styles.cardRender}
      button
      bordered
      onPress={() => onPress(item)}>
      <Left>
        <Thumbnail
          square
          source={{
            uri: photo,
          }}
        />
      </Left>
      <Body>
        <Text> {item.firstName + ' ' + item.lastName}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Icon
            name="trash"
            style={styles.deleteButton}
            onPress={() => onDelete(item)}
          />
        </Button>
      </Right>
    </ListItem>
  );
}

class ContactsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {data, deletedData, savedData, deleteError, error} = this.props;

    if (prevProps.data !== data) {
      this.setState({
        data: data,
      });
    } else if (
      prevProps.savedData !== savedData ||
      prevProps.deletedData !== deletedData
    ) {
      this.reload();
    } else if (error && prevProps.error !== error) {
      showError(error);
    } else if (deleteError && prevProps.deleteError !== deleteError) {
      showError(deleteError);
    }
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findAll();
  }

  onShowForm = item => {
    this.props.navigation.push('Contact', item ? {id: item.id} : null);
  };

  onAdd = () => {
    this.props.navigation.push('Contact');
  };

  onDelete = item => {
    Alert.alert(
      'Confirmation',
      'Delete this Item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.deleteById(item.id)},
      ],
      {cancelable: true},
    );
  };

  render() {
    const {navigation, loading} = this.props;
    const {data} = this.state;
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
            <Title>Contact</Title>
          </Body>
          <Right>
            <Button full>
              <Icon name="add" onPress={this.onAdd} />
            </Button>
          </Right>
        </Header>
        <Container style={styles.container}>
          <SwipeListView
            style={styles.content}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
            }
            data={data.data}
            renderItem={({item, index}) => (
              <RowServices
                style={styles.card}
                onPress={this.onShowForm}
                item={item}
                index={index}
                onDelete={this.onDelete}
              />
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
            keyExtractor={item => item.id.toString()}
          />
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => ({
  deletedData: state.deleteContactById.data,
  deleteError: state.deleteContactById.error,
  savedData: state.savedContact.data,

  data: state.getContacts.data,
  loading: state.getContacts.loading || state.deleteContactById.loading,
  error: state.getContacts.error,
});

const mapDispatchToProps = {
  findAll,
  deleteById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsScreen);
