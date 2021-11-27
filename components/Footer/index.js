import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	background-color: red;
	justify-content: center;
	align-items: center;
    width: 100%;
    height: 32px;
    flex: 0.5;
    margin-top: 16px;
`;

const GotoRandomButton = styled.Button`
	font-size: 24px;
	color: white;
`;

const Footer = ({ text, sign, navigation, direction }) => {

    return (
        <Container>
            <GotoRandomButton
                title={`${sign}  ${text}`}
                color="black"
                onPress={() => navigation.navigate(direction)}
            />
        </Container>
    );
};

export default Footer;