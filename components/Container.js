
import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
    flex:1;
    align-items: center;
    justify-content: center;
    padding: 18px;
    position: relative;
    height: 100%;
    width: 100%;
    `

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    background: #FDE3D1;
    `
export const TextContainer = styled.View`
    flex: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    `

export const Button = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    width: 85%;
    height: 20px;
    `