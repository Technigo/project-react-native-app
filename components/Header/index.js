import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	background-color: red;
	justify-content: center;
	align-items: center;
    width: 100%;
    height: 2rem;
    flex: 1;
`;

const Title = styled.Text`
	font-size: 24px;
	color: white;
`;

const Header = () => {
    return (
        <Container>
            <Title>Magic Zoltar</Title>
        </Container>
    );
};

export default Header;