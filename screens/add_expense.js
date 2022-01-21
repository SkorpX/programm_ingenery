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

const Add_expense = ({ navigation, route }) => {
  const [date, setDate] = useState();
  const [nameCategory, setNameCategory] = useState(route.params.paramKey);
  const [amount, setAmount] = useState(null);
  const [regular, setRegular] = useState('Нет');
  const [comment, setComment] = useState();
  const [source, setSource] = useState();

  const [dataArray, setDataArray] = useState([
    {
      id: '1',
      category: 'Еда',
      date: '2020-01-01T00:00:01',
      amount: 100,
      regular: 'Нет',
      comment: 'Пробный',
      source: 'Кошелек 1',
    },
    {
      id: '2',
      category: 'Транспорт',
      date: '2020-01-01T00:00:02',
      amount: 1000,
      regular: 'Нет',
      comment: 'Пробный 2',
      source: 'Кошелек 1',
    },
  ]);

  const addToList = () => {
    setDataArray((list) => {
      return [
        {
          id: 2,
          category: nameCategory,
          date: date,
          amount: amount,
          regular: regular,
          comment: comment,
          source: source,
        },
        ...list,
      ];
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
          onPress={() => navigation.navigate('Second')}
        />
        <Text style={styles.statusbartext}> Добавление траты</Text>
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Категория:</Text>
        <Picker
          style={{
            width: 200,
            fontSize: 20,
            textAlign: 'center',
            minWidth: 1,
            borderRadius: 10,
          }}
          selectedValue={nameCategory}
          onValueChange={(itemValue, itemIndex) => setNameCategory(itemValue)}
          mode="dropdown">
          <Picker.Item label="Еда" value="Еда" />
          <Picker.Item label="Транспорт" value="Транспорт" />
          <Picker.Item label="Квартира" value="Квартира" />
          <Picker.Item label="Красота" value="Красота" />
          <Picker.Item label="Техника" value="Техника" />
          <Picker.Item label="Досуг" value="Досуг" />
          <Picker.Item label="Путешествия" value="Путешествия" />
          <Picker.Item label="Одежда" value="Одежда" />
          <Picker.Item label="Медицина" value="Медицина" />
          <Picker.Item label="Другое" value="Другое" />
        </Picker>
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Дата:</Text>
        <MyDatePicker
          onValueChange={(itemValue, itemIndex) => setDate(itemValue)}
        />
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Сумма:</Text>
        <TextInput
          style={styles.styleinput}
          selectedValue={amount}
          keyboardType="numeric"
          onChangeText={(itemValue, itemIndex) => setAmount(itemValue)}
        />
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Регулярная трата:</Text>
        <Picker
          style={{
            width: 100,
            fontSize: 20,
            textAlign: 'center',
            minWidth: 1,
            borderRadius: 10,
          }}
          onValueChange={(itemValue, itemIndex) => setRegular(itemValue)}
          mode="dropdown">
          <Picker.Item label="Да" value="Да" />
          <Picker.Item label="Нет" value="Нет" />
        </Picker>
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Источник:</Text>
        <Picker
          style={{
            width: 200,
            fontSize: 20,
            textAlign: 'center',
            minWidth: 1,
            borderRadius: 10,
          }}
          onValueChange={(itemValue, itemIndex) => setSource(itemValue)}>
          <Picker.Item label="Кошелек 1" value="Кошелек 1" />
          <Picker.Item label="Кошелек 2" value="Кошелек 2" />
          <Picker.Item label="Банковский счет 1" value="Банк. счет 1" />
          <Picker.Item label="Банковский счет 2" value="Банк. счет 2" />
        </Picker>
      </View>

      <View style={styles.forview}>
        <Text style={styles.statusbartext}>Комментарий:</Text>
        <TextInput
          style={styles.styleinput2}
          onChangeText={(itemValue, itemIndex) => setComment(itemValue)}
          multiline={true}
        />
      </View>

      <Button
        style={styles.addbuttontext}
        title="Фиксация"
        onPress={() => addToList()}
      />
      <View>
        <FlatList
          data={dataArray}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
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
  styleinput: {
    fontSize: 20,
    paddingHorizontal: 10,
    minWidth: 1,
  },
  styleinput2: {
    fontSize: 20,
    paddingHorizontal: 10,
    minWidth: 2,
    height: 100,
  },
});

export default Add_expense;
