import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	/* background-color: #f2f2f2; */
	justify-content: space-evenly;
	align-items: center;
  padding: 0 30px;
  /* height: 100%; */
`

export const PrimaryButton = styled.TouchableOpacity`
  min-width: 100px;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: #1d3557;
  border: 4px solid #e63946;
`

export const PrimaryButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

export const SecondaryButton = styled.TouchableOpacity`
  width: 100px;
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  border: 4px solid #1d3557;
`

export const SecondaryButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

