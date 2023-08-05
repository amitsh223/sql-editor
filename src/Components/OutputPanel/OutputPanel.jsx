import styled from '@emotion/styled';
import { Tab, Tabs } from '@mui/material';
import React from 'react';
import { Panel } from '../Panel';
import { DataTable } from '../DataTable';

export default function OutputPanel({ result }) {
    const [activeOutputTab, setActiveOutputTab] = React.useState(0);
    console.log(result);
    return (
        <Wrapper>
            <Panel width="100%" height="100%" column >
                <Panel.Header hideOnTablet>
                    <Tabs value={activeOutputTab} onChange={(event, newValue) => {
                        setActiveOutputTab(newValue);
                    }} aria-label="output">
                        <Tab label="Output" />
                    </Tabs>
                </Panel.Header>
                <TabPanel activeTab={activeOutputTab} id={0}>
                    {
                        (result && <DataTable name={"Result"} columns={result.columns} items={result.items} />)
                    }
                </TabPanel>
            </Panel>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
`

const TabPanel = styled.section`
    display: ${props => (props.id === props.activeTab) ? "flex" : "none"};
    padding: 12px;
 
`