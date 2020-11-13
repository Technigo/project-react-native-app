import styled from 'styled-components/native';

export const FrogImage = styled.ImageBackground`
    font-size: 50px;
    padding: 50px;
    font-weight: bold;
    ${(props) =>  `transform: translate(${props.xOffset}px, ${props.yOffset}px)`}
    `;

export const FrogBackground = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 500px;
`;