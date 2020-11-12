import styled from 'styled-components/native'

export const MainContainer = styled.View`
  flex: 1;
`
export const TopContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: whitesmoke;
  padding-top: 70px;
`
export const BottomContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #d6bea0;
  width: 100%;
  padding-top: 20px;
`
export const ColorContainer1 = styled.View`
  background-color: #e76060;
  border-radius: 50px;
  margin: 20px;
  width: 80%;
`
export const ColorContainer2 = styled(ColorContainer1)`
  background-color: #5aad8e;
`
export const ColorContainer3 = styled(ColorContainer1)`
  background-color: #ffb252;
`