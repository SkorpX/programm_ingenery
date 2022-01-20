import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Picker, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Add_expense = ({ navigation, route }) => {

  const [nameCategory, setNameCategory] = useState(route.params.paramKey);
    
  return (
    <View style={styles.app}>
    <View style = {styles.statusbar}>
     <AntDesign style = {styles.backicon}
                          name="back" 
                          size={32}
                          color="#D500F9"
                          onPress={() => navigation.navigate('Second')}/>
      <Text style = {styles.statusbartext}> Добавление траты</Text>
     </View>
     
     <View style={styles.forview}>
      <Text style={styles.statusbartext} >Категория:</Text>
      <Picker style={{width:200, fontSize: 20, textAlign: 'center'}} selectedValue={nameCategory} onValueChange={(itemValue, itemIndex) => setNameCategory(itemValue)} mode='dropdown'>
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
      <Text style={styles.statusbartext} >Дата:</Text>
      <TextInput style={styles.styleinput} 
                  defaultValue={new Date()} 
                  keyboardType='numeric'/>     
     </View>
     
     <View style={styles.forview}>
      <Text style={styles.statusbartext}>Сумма:</Text>
      <TextInput style={styles.styleinput} 
                  keyboardType='numeric'/>     
     </View>

     <View style={styles.forview}>
      <Text style={styles.statusbartext} >Регулярная трата:</Text>
      <Picker style={{width:100, fontSize: 20, textAlign: 'center'}}>
        <Picker.Item label="Да" value="Да" />
        <Picker.Item label="Нет" value="Нет" />
      </Picker>     
     </View>

     <View style={styles.forview}>
      <Text style={styles.statusbartext} >Комментарий:</Text>
      <TextInput style={styles.styleinput}/>     
     </View>

     <View style={styles.forview}>
      <Text style={styles.statusbartext} >Источник:</Text>
      <Picker style={{width:200, fontSize: 20, textAlign: 'center'}}>
        <Picker.Item label="Кошелек 1" value="Кошелек 1" />
        <Picker.Item label="Кошелек 2" value="Кошелек 2" />
        <Picker.Item label="Банковский счет 1" value="Банк. счет 1" />
        <Picker.Item label="Банковский счет 2" value="Банк. счет 2" />
      </Picker>     
     </View>

     <Button
        title="Фиксация"
        onPress={() => alert('Зафиксировано')}
      />
     
     
     </View>
  )}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    paddingTop: 60,
   // justifyContent: 'flex-start'
    //flexDirection: 'row',
    //paddingLeft: 20
  },
  statusbartext:{
   fontFamily: 'Roboto',
   fontSize: 20,
   fontWeight: 'Medium',
   marginHorizontal: 10,
   padding: 10,
   textAlign: 'center'
  },
  statusbar:{
    flexDirection: 'row',
   // justifyContent: 'space-evenly',
    //paddingHorizontal: 20,
    alignItems: 'center',
    },
  backicon:{
    marginLeft: 20
  },
  addbuttontext:{
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'center',      
  },
  forview:{
    fontSize: 15, 
    borderWidth: 1, 
    width: 360,  
    marginHorizontal: 25, 
    marginVertical: 10, 
    flexDirection: 'row',
    borderRadius: 10,},
  styleinput:{
    fontSize: 20, 
    paddingHorizontal: 10,},
})
  
export default Add_expense;