import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Card, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import page1 from '../assets/Money_PNG.png';
import { MaterialIcons } from '@expo/vector-icons';


const Story2 = ({navigation}) => {
  return (
    <View style = {{flex: 1}}>
    <ImageBackground source = {page1} style = {{flex: 1}}>
     <MaterialIcons
     name="close" 
     size={32} 
     color="grey"
     onPress={() => navigation.navigate('First')}/>
      <TouchableHighlight onPress={() => navigation.navigate('Story3')}>
      <View style = {{backgroundColor: 'white', marginTop: 10, marginHorizontal: 20, shadowColor: 'grey', shadowOffset: {	width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, borderRadius: 20}}>
      <Text style = {{marginHorizontal: 40, fontFamily: 'Montserrat', fontWeight: 'Bold', fontSize: 20, marginTop: 30}}>
        Пользуйтесь правилом 30 дней для крупных покупок
      </Text>
      <Text style = {{marginHorizontal: 20, fontFamily: 'Montserrat', margin: 10, marginBottom: 20}}>Правило 30 дней гласит: прежде чем сделать большую и порой незапланированную покупку, отложите ее и подумайте о ней 30 дней. Этот лайфхак может подойти тем, кто покупает новую модель телефона, ноутбука, электронных часов или других девайсов при каждом новом релизе. Возьмите сумму, которую вы планируете потратить на эту вещь, и отложите ее на сберегательный счет. Если спустя 30 дней она все еще вам будет казаться жизненно необходимым приобретением — покупайте. Если нет — оставляйте деньги на счете.</Text>
      </View>
      </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

export default Story2;