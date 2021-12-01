import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	background-color: #CF3030;
	justify-content: center;
	align-items: center;
    width: 100%;
    height: 32px;
    flex: 1;
`;

const Title = styled.Text`
	font-size: 24px;
	color: white;
    font-weight: bold;
`;

const Header = () => {
    return (
        <Container>
            <Title>Magic Zoltar</Title>
        </Container>
    );
};

export default Header;