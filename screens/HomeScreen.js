import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native'
import { CardItemOne, CardItemTwo, CardItemThree, CardItemFour, CardItemFive, CardSmallOne, CardSmallTwo } from './CardItems'



export const HomeScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.backgroundContainer}>
            <Text style={styles.heading}>Welcome to my first App</Text>
            <Text style={styles.text}>Take look around, navigate here on the Homescreen or in the drawer navigation. Enjoy!</Text>
                {/* <ImageBackground source={require('../assets/backgroundimage.png')} resizeMode="cover" style={styles.image}> */}
                    {/* <Text style={styles.text}>Welcome!</Text> */}
                    <TouchableOpacity activeOpacity= '0.1' onPress={() => navigation.navigate('Step on')}>
                      <CardItemOne/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity= '0.1' onPress={() => navigation.navigate('Random videos')}>
                      <CardItemTwo/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity= '0.1' onPress={() => navigation.navigate('Click for Quote')}>
                      <CardItemThree/>
                    </TouchableOpacity>

                    <View style={styles.cardsmall}>
                      <View>
                        <CardSmallOne />
                      </View>
                      <View>
                        <CardSmallTwo />
                      </View>
                    </View>

                    <TouchableOpacity activeOpacity= '0.1' onPress={() => navigation.navigate('Shake for Quote')}>
                      <CardItemFour/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity= '0.1' onPress={() => navigation.navigate('Contact')}>
                      <CardItemFive/>
                    </TouchableOpacity>
                {/* </ImageBackground> */}
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'relative',
      },
      backgroundContainer: {
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
        // top: 0,
        paddingTop: 32,
      },
      heading: {
        fontSize: 24,
        fontWeight: '200',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        textAlign: 'center'
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: '#1a1a1a',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '200',
        textAlign: 'left',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 32,
        textAlign: 'center'
      },
      cardsmall: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
      }
  });
