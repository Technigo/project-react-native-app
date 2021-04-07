import React from 'react'
import styled from 'styled-components/native'
import { Platform, View, Text, Image } from 'react-native' //no need to import View, Text, Image if I am using styled components.
//import AppLoading from 'expo-app-loading';
//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: white; 
  justify-content: center;
  align-items: center;
`;

const StartText = styled(Container)`
  z-index: 1,
  font-weight: bold,
`;

/* const MagicBall = styled.Image`
  width: 200px,
  height: 200px,
  object-fit: contain,
`; */

export const StartPage = () => {
/*   let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
 */
  return (
    <Container>
      <Image
        source={require('../assets/billiard.png')}
        accessibilityLabel='Magic 8 ball'
        style={{
          height: 200,
          width: 200,
          resizeMode: 'contain'
      }}
      />
      {/*   */}
          <StartText>
            Ask a question and shake me to get your magic answer! ADD BELOW LATER WHEN I GOT IT TO WORK
          </StartText>
{/*         <Text>
		      One way of doing a prediction would go "This is..." "This is not..." "This will be..." 
		    </Text>
		    <Text>
		      With me 1. Ask a question 2. With mild movements kindly shake me to get your magic answer! 
		    </Text>

		  <BottomContainer>
			  <Text>
				  Built on the magic 8-ball fortune-telling or seeking advice. 
			  </Text>
		  </BottomContainer> */}
    </Container>
  )
}