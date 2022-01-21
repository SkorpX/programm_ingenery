import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

export default function ListItem({ item }) {
  return (
    <TouchableHighlight
      //onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#AAA'}>
      <View>
        <View style={styles.costLineWrapper}>
          <Text style={styles.costDate}>
            {dayjs(item.date).format('DD.M.YYYY')}{' '}
          </Text>
          <Text style={styles.costCategory}>{item.category}</Text>
          <Text style={styles.costAmount}>{item.amount} </Text>
        </View>
        <View style={styles.costLineWrapper}>
          <Text style={styles.costCategory}>{item.comment} </Text>
          <Text style={styles.costSource}>{item.source}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  costLineWrapper: {
    height: 50,
    flexDirection: 'row',
  },
  costAmount: {
    height: 50,
    lineHeight: 50,
    paddingLeft: 20,
  },
  costSource: {
    lineHeight: 50,
  },
  costCategory: {
    height: 50,
    lineHeight: 50,
  },
  costDate: {
    height: 50,
    lineHeight: 50,
    flex: 3,
    paddingRight: 20,
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 100,
  },
});
