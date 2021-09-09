import React, { Component } from 'react';
import {
  SectionList, StyleSheet, Text
} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';


let ACTION_TYPE = {
  LOGOUT: 'LOGOUT',
};

class Settings extends Component {
  state = {
    sections: [
      {
        title: null,
        data: [
          {
            image: require('../../assets/images/menu/logout.png'),
            title: "Logout",
            actionType: ACTION_TYPE.LOGOUT,
            hasChevron: false,
          },
        ],
      },
    ],
  };

  onPress = ({actionType, title}) => {
    switch (actionType) {
  
      case ACTION_TYPE.LOGOUT:
        this.props.logout();
        break;
    }
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item}) => {
    return (
      <ListItem bottomDivider onPress={() => this.onPress(item)}>
        <Avatar source={item.image} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        {item.hasChevron && <ListItem.Chevron />}
      </ListItem>
    );
  };

  render() {
    return (
      <SectionList
        sections={this.state.sections}
        keyExtractor={(item, index) => item + index}
        renderItem={this._renderItem}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
