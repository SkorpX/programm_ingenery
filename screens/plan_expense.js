import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Picker, Button, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Plan_Expense = ({navigation}) => {

  const [sum1, setsum1] = useState(null);
  const [sum2, setsum2] = useState(null);
  const [sum3, setsum3] = useState(null);
  

    
  return (
    <View style={styles.app}>
    <View style = {styles.statusbar}>
     <AntDesign style = {styles.backicon}
                          name="back" 
                          size={32}
                          color="#D500F9"
                          onPress={() => navigation.navigate('First')}/>
      <Text style = {styles.statusbartext}> Plan </Text>
     </View>
     
     <View style={styles.forview}>
      <Text style={styles.statusbartext2}>Первичные потребности</Text>
      <TextInput style={styles.styleinput} value={sum1} keyboardType="numeric" placeholder='%' onChangeText={sum1 => setsum1(sum1)}/>     
     </View>
     
     <View style={styles.forview}>
      <Text style={styles.statusbartext2}>Вторичные потребности</Text>
      <TextInput style={styles.styleinput} value={sum2} keyboardType="numeric" placeholder='%' onChangeText={sum2 => setsum2(sum2)}/>     
     </View>

     <View style={styles.forview}>
      <Text style={styles.statusbartext}>Накопления:</Text><TextInput style={styles.styleinput} keyboardType="numeric" placeholder='%' onChangeText={sum3 => setsum3(sum3)}/>    
     </View>

     <View style={styles.forview}>
      <Text style={styles.statusbartext}>Комментарий:</Text>
      <TextInput style={styles.styleinput}/>     
     </View>

     <Button
        title="Утвердить"
        onPress={() => {Number(sum1)+Number(sum2)+Number(sum3) != 100 ? alert('Некорректная суммарная доля - не равна 100%') : alert ('План успешно создан!')}}
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
   textAlign: 'center',
  },
  statusbartext2:{
   fontFamily: 'Roboto',
   fontSize: 20,
   fontWeight: 'Medium',
   marginHorizontal: 10,
   padding: 10,
   textAlign: 'center',
   width: 170,
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

export default Plan_Expense;