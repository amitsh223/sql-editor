import styled from '@emotion/styled';
import React, { useState } from 'react'
import { InputPanel } from '../InputPanel';
import { OutputPanel } from '../OutputPanel';
import { Panel } from '../Panel';

export default function MainLayout() {
    const [result, setResult] = useState(null);
    return (
        <Wrapper>
            <Panel >
                <InputPanel result={result} setResults={setResult}/>
            </Panel>
            <Panel borderLeft hideOnTablet>
                <OutputPanel result={result} />
            </Panel>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    flex-grow: 1;
    display: flex;
`