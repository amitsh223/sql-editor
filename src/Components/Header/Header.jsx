import styled from '@emotion/styled';
import React from 'react';

export default function Header() {
    return (
        <Wrapper>
            SQL Editor
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 100%;
    height: min-content;
    padding: 16px 14px;
    border-bottom: 1px solid var(--grey-200);
    font-weight: 600;
    background-color: var(--grey-600);
    color: white
`