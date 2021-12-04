import styled from 'styled-components/native'

export const Container = styled.View `
  padding-top: 2px;
  height: 40%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const APIButton = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
	width: 50%;
  max-width: 200px;
	background-color: #06B3D1;
  border-radius: 5px;
  min-height: 40px;
`
export const Title = styled.Text`
	font-size: 30px;
  font-weight: bold;
	color: #ee7ec0;
  text-align: center;
`
export const WeatherImage = styled.Image `
  width: 100%;
	height: 100%;
`
export const BtnText = styled.Text `
  color: #e6f4f1;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`
export const StyledText = styled.Text `
  font-size: 25px;
  color: #00344e;
  margin-bottom: 30px;
  text-align: center;
`