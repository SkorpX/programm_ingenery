import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import MyDatePickerForCard from './dopClass/myDatePickerFobCard';

const Bank_card = ({ navigation }) => {
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
        <Text style={styles.statusbartext}> Добавить карту</Text>
      </View>

      <View style={styles.forview2}>
        <Text style={styles.statusbartext}>Номер карты</Text>
        <TextInput style={styles.styleinput} keyboardType="numeric" />
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Дата:</Text>
        <MyDatePickerForCard />
      </View>

      <View style={styles.forview2}>
        <Text style={styles.statusbartext}>Номер на обороте</Text>
        <TextInput
          style={styles.styleinput2}
          keyboardType="numeric"
          secureTextEntry={true}
          maxLength="3"
        />
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Фамилия</Text>
        <TextInput style={styles.styleinput} />
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Имя</Text>
        <TextInput style={styles.styleinput} />
      </View>
      
      <Button
        style={styles.addbuttontext}
        title="Записать"
        onPress={() => alert('Банковская карта записана')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 60,
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
    marginHorizontal: 25,
    marginVertical: '2.5%',
    flexDirection: 'row',
    borderRadius: 10,
    textAlign: 'center',
  },
  forview2: {
    fontSize: 15,
    borderWidth: 1,
    marginHorizontal: 25,
    marginVertical: '2.5%',
    borderRadius: 10,
  },
  styleinput: {
    fontSize: 20,
    width: 250,
    marginHorizontal: 10,
    alignSelf: 'center',
    minWidth: 1,
  },
  styleinput2: {
    fontSize: 20,
    width: 50,
    marginHorizontal: 10,
    alignSelf: 'center',
    minWidth: 1,
  },
});

export default Bank_card;
