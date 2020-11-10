import React, { useState } from 'react';
import { Share, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const ShareScreen = () => {
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('');

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `You've received a ${mood} mood booster! ${phrase()} Friend's personal message: ${message}`,
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

  const phrase = () => {
    if(mood === 'Crafty') {
      return 'Getting creative and making something with your hands can help set the positive vibes!';
    } else if(mood === 'Sunny') {
      return 'Going outdoors and enjoying some fresh air is an instant mood boost!';
    } else if(mood === 'Active') {
      return 'Move throughout the day! Breaking a sweat helps you handle stress hormones.';
    } else if(mood === 'Smiley') {
      return 'Chin up and smile! Our facial expressions influence our thoughts and emotions.';
    } else {
      return 'What is the mood for today...?';
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      enabled={true}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <MainScreenContainer>
            <TitleText>Tap on a Mood Button</TitleText>

            <RowImageContainer>
              <SingleImageContainer>
                <MoodImage source={require('../assets/crafty.png')} />
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
              <MoodPhraseText>{phrase()}</MoodPhraseText>
            </MoodPhraseSection>

            <PersonalMessageText>Add a personal message and share this mood booster with a friend via text, Twitter, email...:</PersonalMessageText>

            <TextInputField placeholder="Enter some text here" multiline style={{minHeight: 80}} onChangeText={text => setMessage(text)} value={message}/>

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
