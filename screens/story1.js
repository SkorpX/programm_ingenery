import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Card, TouchableHighlight} from 'react-native';
import Constants from 'expo-constants';
import page1 from '../assets/Money_PNG.png';
import { MaterialIcons } from '@expo/vector-icons';



const Story1 = ({navigation}) => {
  return (
    <View style = {{flex: 1}}>
    <ImageBackground source = {page1} style = {{flex: 1}}>
    <MaterialIcons
     name="close" 
     size={32} 
     color="grey"
     onPress={() => navigation.navigate('First')}/>
     <TouchableHighlight onPress={() => navigation.navigate('Story2')}>
      <View style = {{backgroundColor: 'white', marginTop: 10, marginHorizontal: 20, shadowColor: 'grey', shadowOffset: {	width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, borderRadius: 20}}>
      <Text style = {{marginHorizontal: 40, fontFamily: 'Montserrat', fontWeight: 'Bold', fontSize: 20, marginTop: 30}}>
        Откладывайте фиксированный процент с дохода
      </Text>
      <Text style = {{marginHorizontal: 20, fontFamily: 'Montserrat', margin: 10, marginBottom: 20}}>Это первое, с чего стоит начать. Заведите отдельный счет или дебетовую карту, куда сможете перечислять проценты от вашей зарплаты, подработки, аванса или прибыли от бизнеса. Сколько именно — зависит от уровня дохода и обязательных трат. Важно, чтобы это стало привычкой. Поэтому старайтесь откладывать систематически каждый раз, не пропускать {"\n"}и не переносить платежи. Допустим, у вас зарплата 80 тыс. {"\n"}в месяц. Если откладывать 15 % ежемесячно, то за год можно накопить 144 тыс.</Text>
      </View>
    </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

export default Story1;
