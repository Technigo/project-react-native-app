import React, { useState } from 'react';
import { Share, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const ShareScreen = () => {
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('');

  //Function to implement the Share on phone button, the text content that will be share is what
  //appears in the message property. I am generating a combination of the set Mood, the phrase
  //explaining that Mood and also the personal message that the user has entered in the TextInput field.
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `You've received a ${mood} mood booster! ${phrase()} A special message just for you: ${message}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  //Function to generate the phrase that will be showing on screen and shared at the end. The shown
  //phrase will depend on the mood that has been chosen and set via the mood state
  const phrase = () => {
    if(mood === 'Crafty') {
      return 'Getting creative and making something with your hands can help set the positive vibes 🧶!';
    } else if(mood === 'Sunny') {
      return 'Going outdoors and enjoying some fresh air is an instant mood boost ☀!';
    } else if(mood === 'Active') {
      return 'Move throughout the day! Breaking a sweat helps you handle stress hormones 🏃‍♀️.';
    } else if(mood === 'Smiley') {
      return 'Chin up and smile! Our facial expressions influence our thoughts and emotions 😁.';
    } else {
      return 'Set a mood booster for today!';
    }
  };

  return (
    //KeyboardAvoidingView: Component so that the phone's keyboard doesn't cover the TextInput field when the user is typing
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      enabled={true}
    >
      <SafeAreaView style={styles.container}>
        {/* Scrollview so that it's possible to scroll since my content is longer than the phone's screen height*/}
        <ScrollView style={styles.scrollView}>
          <MainScreenContainer>
            <TitleText>Tap on a Mood Button</TitleText>

            <RowImageContainer>
              <SingleImageContainer>
                <MoodImage source={require('../assets/crafty.png')} />
                {/* There are 4 mood buttons to choose from: when tapped they will set a new mood via a state, then depending
                on the state, the button will change color to show it has been chosen, this is done with inline styling on
                each button */}
                <MoodButton onPress={() => setMood('Crafty')} style={{backgroundColor: mood === 'Crafty' ? "#99dddd" : "white"}}>
                  <MoodButtonText>Crafty</MoodButtonText>
                </MoodButton>
              </SingleImageContainer>

              <SingleImageContainer>
                <MoodImage source={require('../assets/sunny.png')} />
                <MoodButton onPress={() => setMood('Sunny')} style={{backgroundColor: mood === 'Sunny' ? "#99dddd" : "white"}}>
                  <MoodButtonText>Sunny</MoodButtonText>
                </MoodButton>
              </SingleImageContainer>
            </RowImageContainer>

            <RowImageContainer>
              <SingleImageContainer>
                <MoodImage source={require('../assets/active.png')} />
                <MoodButton onPress={() => setMood('Active')} style={{backgroundColor: mood === 'Active' ? "#99dddd" : "white"}}>
                  <MoodButtonText>Active</MoodButtonText>
                </MoodButton>
              </SingleImageContainer>

              <SingleImageContainer>
                <MoodImage source={require('../assets/smiley.png')} />
                <MoodButton onPress={() => setMood('Smiley')} style={{backgroundColor: mood === 'Smiley' ? "#99dddd" : "white"}}>
                  <MoodButtonText>Smiley</MoodButtonText>
                </MoodButton>
              </SingleImageContainer>
            </RowImageContainer>

            <MoodPhraseSection>
              {/* Phrase shown is determined by calling the phrase() function which will generate a phrase depending on the mood chosen*/}
              <MoodPhraseText>{phrase()}</MoodPhraseText>
            </MoodPhraseSection>

            <PersonalMessageText>Add a personal message and share this mood booster with a friend via text, Twitter, email...:</PersonalMessageText>

            {/* Users have the option to personalize their message by adding their own text in this input field. The text they enter is stored via
            the message state*/}
            <TextInputField placeholder="Enter some text here" multiline style={{minHeight: 80}} onChangeText={text => setMessage(text)} value={message}/>

            {/* Share button calls the onShare() function which will bring up the phone's sharing functionality in which you can share the final message
            as a text message to your contacts, via email or social medias like Twitter*/}
            <ShareButton onPress={onShare}>
              <ShareButtonText>SHARE</ShareButtonText>
            </ShareButton>
          </MainScreenContainer>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

/*STYLED COMPONENTS AND STYLESHEETS*/
const MainScreenContainer = styled.View`
  flex: 1;
  padding-top: 20px
  background-color: white;
`;

const TitleText = styled.Text`
  font-size: 18px;
  text-align: center;
  margin: auto;
  margin-bottom: 5px;
`;

const RowImageContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const SingleImageContainer = styled.View`
  width: 180px;
  height: 180px;
  margin: auto;
`;

const MoodImage = styled.Image`
  width: 80%;
  height: 80%;
  margin: auto;
`;

const MoodButton = styled.TouchableOpacity`
  background: white;
  border: 2px solid black;
  width: 70px;
  padding: 4px;
  margin: auto;
`;

const MoodButtonText = styled.Text`
  color: black;
  text-align: center;
  font-weight: bold;
`;

const MoodPhraseSection = styled.View`
  background-color: #99dddd;
  width: 80%;
  margin: 30px auto;
  box-shadow: 5px 5px;
`;

const MoodPhraseText = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  font-family: Verdana;
  padding: 25px;
  text-align: center;
`;

const PersonalMessageText = styled.Text`
  font-size: 14px;
  font-style: italic;
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
`;

const TextInputField = styled.TextInput`
  width: 80%;
  border-color: black;
  border-width: 3px;
  margin: auto;
`;

const ShareButton = styled.TouchableOpacity`
  background: white;
  border: 2px solid #99dddd;
  width: 100px;
  padding: 14px;
  margin: auto;
  margin-top: 35px;
  margin-bottom: 70px;
`;

const ShareButtonText = styled.Text`
  color: #99dddd;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const styles = StyleSheet.create({
  /*Styling for ScrollView*/
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
});
