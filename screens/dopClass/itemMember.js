import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Icon from '@expo/vector-icons/Entypo';

export default class ItemMembers extends React.Component {
  render() {
    const { name, photo } = this.props;

    return (
      <View style={styles.app}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 25,
            alignItems: 'center',
          }}>
          <View style={{ width: '30%' }}>
            <Image
              source={photo}
              style={{
                width: 60,
                height: 60,
                borderRadius: 13,
              }}
            />
          </View>
          <View
            style={{
              width: '50%',
            }}>
            <Text
              style={{
                fontFamily: 'Bold',
                fontSize: 20,
                color: '#044244',
              }}>
              {name}
            </Text>

            <Text
              style={{
                fontFamily: 'Medium',
                fontSize: 14,
                color: '#9ca1a2',
              }}>
              25.12.21 21:47:00
            </Text>
          </View>
          <View
            style={{
              width: '20%',
              alignItems: 'flex-end',
            }}>
            <Icon
              onPress={() => alert('Справочная информация')}
              name="sound-mix"
              color="#9ca1a2"
              size={25}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    // justifyContent: 'flex-start'
    //flexDirection: 'row',
    padding: 20,
  },
  statusbartext: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'Medium',
    marginHorizontal: 10,
    padding: 10,
    textAlign: 'center',
  },
  statusbar: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    //paddingHorizontal: 20,
    alignItems: 'center',
  },
  backicon: {
    marginLeft: 20,
  },
  addbuttontext: {
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'center',
  },
  forview: {
    fontSize: 15,
    borderWidth: 1,
    width: '95%',
    marginHorizontal: 25,
    marginVertical: '2.5%',
    flexDirection: 'row',
    borderRadius: 10,
  },
  styleinput: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
