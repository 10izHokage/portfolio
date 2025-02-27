import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingWrapper = styled.div`
    text-align: center;
    font-size: 24px;
    font-family: Courier New, monospace;
    color: #424141;
`;

const Spinner = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 2s linear infinite;
    margin: 20px auto;
`;

export const LoadingIndicator: React.FC = () => {
    return (
        <LoadingWrapper>
            <Spinner />
            <span>Загрузка...</span>
        </LoadingWrapper>
    );
};

