import styled from 'styled-components/native';

export const Container = styled.View`
    position: relative;
    display: flex;

    height: 100%;
    width: 80%;
    margin: 50px auto;
`;

export const Input = styled.TextInput`
    font-size: 16px;
    line-height: 24px;
    border: 1px;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 20px;
    padding: 5px;
`
export const ButtonText = styled.Text`
    font-size: 18px;
    color: black;
    text-align: center;
    font-family: 'Inter_500Medium';
`

export const RemoveButtonText = styled.Text`
    font-size: 12px;
    color: black;
    text-align: center;
    font-family: 'Inter_500Medium';
`

export const Button = styled.TouchableOpacity`
    min-width: 50%;
    margin: 15px auto 0 auto;
    background-color: ${props => (props.accentColorDisabled ? 'gray' : 'orange')};
    padding: 5px;
    border-radius: 10px;
`

export const RemoveButton = styled.TouchableOpacity`
    width: 10%;
    margin: 15px auto 0 auto;
    padding: 0;
`

export const LikedPhrases = styled.ScrollView`
    width: 100%;
    border: 2px solid hsl(0, 0%, 50%);
    padding: 10px;
    min-height: 100px;
`

export const LikedPhrase = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    width: 100%;
`

export const SafeArea = styled.SafeAreaView`
    padding: 50px 0;
`

export const Header1 = styled.Text`
    font-size: 30px;
    color: hsl(0, 0%, 20%);
    margin: 40px 0;
    font-family: 'Inter_900Black';
    line-height: 32px;
    text-align: center;
`

export const Header2 = styled.Text`
    font-size: 20px;
    color: hsl(0, 0%, 20%);
    margin: 10px 0;
    font-family: 'Inter_600SemiBold';
    text-align: center;
`

export const PhraseListItem = styled.Text`
    width: 80%;
    flex-wrap: wrap;
    line-height: 25px;
    font-size: 16px;
    font-family: 'Inter_400Regular';
`

export const Burger = styled.TouchableOpacity`
    position: absolute;
    left: -20;
    top: 0;
`

export const WhiteBackground = styled.View`
    background-color: hsla(0, 0%, 95%, .8);
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    height: 100%;
`

export const InvalidInput = styled.Text`
    font-family: Inter_300Light;
    font-size: 22px;
    color: hsl(5, 80%, 60%);
    text-align: center;
`

export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    width: 100%;
`

export const Content = styled.View`
    width: 100%;
    flex: 1;
`
export const InstructionsContainer = styled.ScrollView`
    width: 100%;
    flex: 1;
    margin-bottom: 100px;
`

export const Instructions = styled.Text`
    font-family: Inter_300Light;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 20px;
`
