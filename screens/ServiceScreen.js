import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Build your computer',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Tech support',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Phone/Computer reparation',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

 export const Services = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.serviceContainer}>
        <Text style={styles.ourServices}>
            <h1>Our Services</h1>
        </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  serviceContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    textAlign:'center',
    
  },
  item: {
    backgroundColor: '#34bfaf',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign:'center'
  },
  title: {
    fontSize: 24,
    fontFamily: "roboto",
    fontWeight:'bold'
    
  },
  ourServices: {
      textDecorationLine:'underline',
  }
});