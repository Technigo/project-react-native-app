import React from 'react';
import { Text, Image, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export const CardThumb = (props) => {
  const { card, navigation } = props;

  const onPressCardButton = () => {
    navigation.navigate('CardDetails', { card: card });
  };

  return (
    <>
      <Text>{card.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: card.imageUrl,
        }}
      />
      <Button onPress={onPressCardButton} />
    </>
  );
};
