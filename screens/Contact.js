import React from "react";
import { StyleSheet, Text, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileImage } from "./ProfileImage";

export const Contact = () => {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={styles.heading}>Feel free to contact me!</Text>
      <View style={styles.middle}>
        <ProfileImage />
        <View style={styles.middleText}>
            <Text style={styles.name}>Jessi Nygren Walhed</Text>
            <Text style={styles.name}>hemmahosjessi@gmail.com</Text>
            <Text style={styles.name}>0707 39 46 22</Text>
          </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.technigo}>Technigo 2021</Text>
        <Image 
            style={styles.logo} 
            source={require('../assets/favicon.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  middle: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 64,
  },
  middleText: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 64,
    paddingTop: 64,
  },
  bottom: {
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '100',
    maxWidth: 343,
    marginBottom: 100,
  },
  name: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '300',
    maxWidth: 343,
  },
  technigo: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '100',
    maxWidth: 343,
  },
  logo: {
    width: 48,
    height: 100,
    resizeMode: 'contain',
  }
});
