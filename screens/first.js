import React from "react";
import { View, Text, StyleSheet, Icon, Image, Pressable, TouchableHighlight, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import story1 from '../assets/storiesmoneystorage.jpeg';
import story2 from '../assets/storiesinvestigation.jpeg';
import story3 from '../assets/storiesnews.jpeg';


const ProfileScreen = ({navigation}) => {
    
  return (
    <View style={styles.app}>
    <View style = {styles.statusbar}>
     <AntDesign name="setting" 
                size={32} 
                color="#D500F9"
                onPress={() => alert('hello')}/>
     <Text style = {styles.statusbar}> Name </Text>

     <AntDesign name="plus" 
                size={32} 
                color="#D500F9"
                onPress={() => navigation.navigate('Second')}/>
     </View>

     <View style = {styles.stories}>
     <ScrollView horizontal={true}>
     <TouchableHighlight onPress={() => navigation.navigate('Story1')}>
      <View> 
        <Image source = {story1} style = {styles.storypic} />
        <Text style = {styles.storytext}>Узнайте о возможностях сбережений</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Story2')}>
      <View> 
        <Image source = {story2} style = {styles.storypic}/>
        <Text style = {styles.storytext}>Как начать инвестировать?</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Story3')}>
      <View> 
        <Image source = {story3} style = {styles.storypic}/>
        <Text style = {styles.storytext}>Новости мира финансов</Text>
      </View>
      </TouchableHighlight>
      </ScrollView>
     </View>
     <View style = {styles.main}>
      <Text style = {styles.maintext}>Анализ финансов пока недоступен: недостаточно данных</Text>
     </View>

     <Pressable style = {styles.button}>
       <Text style = {styles.buttontext} 
              onPress={() => navigation.navigate('Third')}
              >Добавить цель</Text>
     </Pressable>

     <Pressable style = {styles.buttonnon}>
       <Text style = {styles.buttontext}>Добавить программу планирования бюджета</Text>
     </Pressable>

     <Pressable style = {styles.buttonnon}>
       <Text style = {styles.buttontext}>Добавить карту</Text>
     </Pressable>

     <Pressable style = {styles.button} >
       <Text style = {styles.buttontext} onPress={() => navigation.navigate('PlanExpense')}>Plan expense</Text>
     </Pressable>
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
  statusbar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'Medium',    
    fontSize: 25
    },
  stories:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  storypic:{
    width: 135, 
    height: 240,
    borderRadius: 10,
    marginRight: 10
  },
  storytext:{
    position: 'absolute',
    width: 135, 
    height: 240,
    top: 7,
    fontFamily: 'Roboto',
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: 'black'
  },
  main:{
    paddingHorizontal: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  maintext:{
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#878787',
    //alignItems: 'center',
  },
  button:{
    bottom: 0,
    backgroundColor: '#1A73E9',
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 7
  },
  buttontext:{
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonnon:{
    bottom: 0,
    opacity: 0.7,
    backgroundColor: 'grey',
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 7
  }
});

export default ProfileScreen;