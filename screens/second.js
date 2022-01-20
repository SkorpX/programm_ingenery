import React, {useState} from "react";
import { View, Text, StyleSheet, Button, Icon, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Addspend = ({navigation}) => {
      
  return (
    <View style={styles.app}>
      <View style = {styles.statusbar}>
        <AntDesign style = {styles.backicon}
                    name="back" 
                    size={32}
                    color="#D500F9"
                    onPress={() => navigation.navigate('First')}/>
        <Text style = {styles.statusbartext}> Добавление трат</Text>
      </View>


     <Pressable style={{width: 70, left: 20, top: 20,
                        paddingVertical: 5, paddingHorizontal: 0,
                        backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 1,
                        borderRadius: 10,}} 
                        onPress={() => navigation.navigate('AddExpense', {paramKey: 'Еда'})}>
                        <Text  style ={styles.addbuttontext}>Еда</Text>
     </Pressable>

      <Pressable style={{width: 130, left: 20, top: 35,
      paddingVertical: 5, paddingHorizontal: 0, 
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Транспорт'})}><Text style ={styles.addbuttontext} >Транспорт</Text></Pressable>
      
      <Pressable style={{width: 120, left: 105, top:-50,
      paddingVertical: 5, paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}}><Text style ={styles.addbuttontext} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Квартира'})}>Квартира</Text></Pressable>

      <Pressable style={{width: 110, left: 165, top:-35,
      paddingVertical: 5, paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}}><Text style ={styles.addbuttontext} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Красота'})}>Красота</Text></Pressable>

      <Pressable style={{width: 110, left: 20, top:-20,
      paddingVertical: 5, paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}}><Text style ={styles.addbuttontext} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Техника'})}>Техника</Text></Pressable>

      <Pressable style={{width: 90, left: 145, top:-55,
      paddingVertical: 5, paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}}><Text style ={styles.addbuttontext} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Досуг'})}>Досуг</Text></Pressable>

      <Pressable style={{width: 160, left: 20, top: -40,
      paddingVertical: 5, paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}}><Text style ={styles.addbuttontext} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Путешествия'})}>Путешествия</Text></Pressable>

      <Pressable style={{width: 110, left: 20, top: -25,
      paddingVertical: 5, paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}}><Text style ={styles.addbuttontext} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Одежда'})}>Одежда</Text></Pressable>

      <Pressable style={{width: 130, left: 150, top: -60,
      paddingVertical: 5, paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}}><Text style ={styles.addbuttontext} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Медицина'})}>Медицина</Text></Pressable>
      
      <Pressable style={{width: 110, left: 20, top: -45,
      paddingVertical: 5, paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'black', borderWidth: 1,
      borderRadius: 10,}}><Text style ={styles.addbuttontext} onPress={() => navigation.navigate('AddExpense', {paramKey: 'Другое'})}>Другое</Text></Pressable>
    </View>
  );
};

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
   fontSize: 25,
   fontWeight: 'Medium',
   marginHorizontal: 40,
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
    }
})
  
export default Addspend;