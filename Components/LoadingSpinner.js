import React from 'react';
import styled from 'styled-components/native';

export const LoadingSpinner = () => {
  return <Loading size='large' color='palevioletred' />;
};

const Loading = styled.ActivityIndicator`
  padding: 20px;
`;
