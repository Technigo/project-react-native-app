import styled from 'styled-components/native'

export const Container = styled.View`
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
export const ColorDiv1 = styled.View`
  background-color: #e76060;
  border-radius: 50px;
  margin: 20px;
  width: 80%;
`
export const ColorDiv2 = styled(ColorDiv1)`
  background-color: #5aad8e;
`
export const ColorDiv3 = styled(ColorDiv1)`
  background-color: #ffb252;
`