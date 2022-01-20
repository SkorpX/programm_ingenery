import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Card, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import page1 from '../assets/Money_PNG.png';
import { MaterialIcons } from '@expo/vector-icons';


const Story3 = ({navigation}) => {
  return (
    <View style = {{flex: 1}}>
    <ImageBackground source = {page1} style = {{flex: 1}}>
    <MaterialIcons
     name="close" 
     size={32} 
     color="grey"
     onPress={() => navigation.navigate('First')}/>
     <TouchableHighlight onPress={() => navigation.navigate('Story1')}>
      <View style = {{backgroundColor: 'white', marginTop: 10, marginHorizontal: 20, shadowColor: 'grey', shadowOffset: {	width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, borderRadius: 20}}>
      <Text style = {{marginHorizontal: 40, fontFamily: 'Montserrat', fontWeight: 'Bold', fontSize: 20, marginTop: 30}}>
        Устройте состязание
      </Text>
      <Text style = {{marginHorizontal: 20, fontFamily: 'Montserrat', margin: 10, marginBottom: 20}}>С собой или другом. Это совет для азартных. Можно сделать из процесса накопления настоящий челлендж. Обозначьте конкретную сумму и дату, до которой эту сумму нужно будет накопить. И придумайте вознаграждение. Тут можно настроиться на более крупные траты — новый девайс или шопинг.

Можно также частично применить предыдущее правило. Например, ваша цель — накопить ₽50 тыс. за полгода. Если это удастся сделать, потратьте такую же сумму себе на вознаграждение за труды. А если соревнуетесь с другом, то можно заранее определить приз или какое-то задание, которое не хотелось бы выполнять. Кто накопит установленную сумму и выигрывает — получает приз, а кто проиграет — приз не получает да еще и выполняет задание.</Text>
      </View>
    </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

export default Story3;