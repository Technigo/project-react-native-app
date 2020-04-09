import React from 'react'
import LottieView from "lottie-react-native";

export const Lottie = () => {
  return (
    <LottieView
      source={require('./assets/C2.json')} autoPlay style={{ height: 300 }}
    />
  )
}

/*
/*export const CoronaImage = () => {
  const [activity, setActivity] = useState()

  return (
    <View>
      <Button onPress={() => navigation.navigate('Lottie')} />
      <Title>Animation</Title>
    </View>
  )
}

const styles = StyleSheet.create({
      animationContainer: {
      backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
      paddingTop: 20,

      style={{
      bottom: 0,
      height: 200,
    }}
            autoPlay
      loop
  },
});*/