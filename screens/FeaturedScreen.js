import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';

const FeaturedScreen = () => {

    const [animals, setAnimals] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAnimalsInfo();
      }, []);

    const getAnimalsInfo = () => {
        setIsLoading(true);
            fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
                .then((res) => res.json())
                .then((animals) => {
                    console.log('Animals: ', animals);
                    setAnimals(animals);
                    setIsLoading(false);
            })
    };

    const imageSrc = animals.image_link;
 
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textheading}>Featured animal of today:</Text>
          <Image
            style={styles.animalimage}
            source={{
              uri: imageSrc
            }}
          />
          <View style={styles.textcontainer}>
              <Text style={styles.textheading}>Name: </Text>
              <Text style={styles.textinfo}>{animals.name}</Text>
          </View>
          <View style={styles.textcontainer}>
              <Text style={styles.textheading}>Animal type: </Text>
              <Text style={styles.textinfo}>{animals.animal_type}</Text>
          </View>
          <View style={styles.textcontainer}>
              <Text style={styles.textheading}>Eats: </Text>
              <Text style={styles.textinfo}>{animals.diet}</Text>
          </View>
          <View style={styles.textcontainer}>
              <Text style={styles.textheading}>Can be found in: </Text>
              <Text style={styles.textinfo}>{animals.habitat}</Text>
          </View>
          <View style={styles.textcontainer}>
              <Text style={styles.textheading}>Lives in: </Text>
              <Text style={styles.textinfo}>{animals.geo_range}</Text>
          </View> 
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        padding: 15
        },
    animalimage: {
        height: 300,
        marginTop: 10
    },
    textcontainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
    },
    textheading: {
        fontSize: 18,
        color: 'black',
        marginBottom: 0,
        fontWeight: 'bold',
    },
    textinfo: {
        fontSize: 18,
        color: 'black',
    }
  })

export default FeaturedScreen;