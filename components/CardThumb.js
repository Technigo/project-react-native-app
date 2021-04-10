import React from 'react';
import { Text, Image, StyleSheet, Pressable } from 'react-native';

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
      <Pressable onPressOut={onPressCardButton}>
        <Text>{card.name}</Text>
        <Image
          style={styles.image}
          source={{
            uri: card.imageUrl,
          }}
        />
      </Pressable>
    </>
  );
};
