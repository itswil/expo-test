import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const DATA = [
    {
      id: 1,
      title: 'Item',
    },
    {
      id: 2,
      title: 'Item',
    },
    {
      id: 3,
      title: 'Item',
    },
    {
      id: 4,
      title: 'Item',
    },
    {
      id: 5,
      title: 'Item',
    },
    {
      id: 6,
      title: 'Item',
    },
    {
      id: 7,
      title: 'Item',
    },
    {
      id: 8,
      title: 'Item',
    },
    {
      id: 9,
      title: 'Item',
    },
    {
      id: 10,
      title: 'Item',
    },
    {
      id: 11,
      title: 'Item',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#eee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
