import React, { useState, Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  SwipeListView,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ListItem from './listItem';

import MyDatePicker from './dopClass/myDatePicker';

const Add_purpose = ({ navigation, route }) => {
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [purpose, setPurpose] = useState();

  const [dataArray, setDataArray] = useState([
    {
      id: '1',
      date: '2020-01-01T00:00:01',
      amount: 100,
      purpose: 'Пробный',
    },
    {
      id: '1',
      date: '2020-01-01T00:00:01',
      amount: 1000,
      purpose: 'Пробный 2',
    },
  ]);

  const addToList = () => {
    setDataArray((list) => {
      return [{ id: 2, date: date, amount: amount, purpose: purpose }, ...list];
    });
  };

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
        <Text style={styles.statusbartext}> Добавление цели</Text>
      </View>
      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Цель</Text>
        <TextInput
          style={styles.styleinput2}
          multiline={true}
          onValueChange={(itemValue, itemIndex) => setPurpose(itemValue)}
        />
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Сумма:</Text>
        <TextInput
          style={styles.styleinput}
          selectedValue={amount}
          keyboardType="numeric"
          onValueChange={(text) => setAmount(text)}
        />
      </View>

      <View style={styles.forview2}>
        <Text style={styles.statusbartext}>Дата окончания:</Text>
        <MyDatePicker
          onValueChange={(itemValue, itemIndex) => setDate(itemValue)}
        />
      </View>
      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Приоритет</Text>
        <Picker
          style={{
            width: 100,
            fontSize: 20,
            textAlign: 'center',
            minWidth: 1,
            borderRadius: 10,
          }}
          mode="dropdown">
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
        </Picker>
      </View>
      <Button
        style={styles.addbuttontext}
        title="Записать"
        onPress={() => alert('Записано')}
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
    width: '95%',
    marginHorizontal: 25,
    marginVertical: '2.5%',
    flexDirection: 'row',
    borderRadius: 10,
  },
  forview2: {
    fontSize: 15,
    borderWidth: 1,
    width: '95%',
    marginHorizontal: 25,
    marginVertical: '2.5%',
    borderRadius: 10,
  },
  styleinput: {
    fontSize: 20,
    paddingHorizontal: 10,
    minWidth: 2,
    alignSelf: 'center',
  },
  styleinput2: {
    fontSize: 20,
    paddingHorizontal: 10,
    minWidth: 2,
    height: 100,
    alignSelf: 'center',
  },
});

export default Add_purpose;
