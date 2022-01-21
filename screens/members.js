import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import ItemMembers from './dopClass/itemMember';
import photo from './images/1.jpg';

const Members = ({ navigation }) => {
  return (
    <View style={styles.app}>
      <View style={styles.statusbar}>
        <AntDesign
          style={styles.backicon}
          name="back"
          size={32}
          color="#D500F9"
          onPress={() => navigation.navigate('First')}
        />
        <Text style={styles.statusbartext}> Участники</Text>
      </View>
      <ItemMembers photo={require('./images/1.jpg')} name="Участник 1" />
      <ItemMembers photo={require('./images/2.jpg')} name="Участник 2" />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    // justifyContent: 'flex-start'
    //flexDirection: 'row',
    //paddingLeft: 20
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

export default Members;
