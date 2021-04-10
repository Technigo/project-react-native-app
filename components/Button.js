import styled from 'styled-components/native';

export const Button = styled.Touchable.Opacity`
background-color: blue;
border-radius: 30px;
color: white;
font-size: 30px;
padding: 8px, 25px;
margin: 10px;
& hover {
    background-color: red;
}
`