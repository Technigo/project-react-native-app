import React from 'react';
import { Text, Image, StyleSheet, Button, Pressable } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

const onPressCardButton = () => {};

export const CardThumb = (props) => {
  const { card } = props;
  return (
    <>
      <Pressable>
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
