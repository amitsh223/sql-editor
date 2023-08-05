import styled from '@emotion/styled';
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Panel } from '../Panel';
import DataTable from '../DataTable/DataTable';
import categories from '../../Data/Tables/Categories';
import customers from '../../Data/Tables/Customers';
import categoriesSchema from '../../Data/Schemas/Categories';
import customerSchema from '../../Data/Schemas/Customers';
import schemaColumnDefinition from '../../Data/Schemas/SchemaColumnDefinition';
import availableQueries from '../../Data/Queries';
import { QUERIES } from '../Utils/MediaQueris';
import { OutputPanel } from '../OutputPanel';

export default function InputPanel({ result, setResults }) {
    const [activeInputTab, setActiveInputTab] = React.useState(0);
    const [activeInfoTab, setActiveInfoTab] = React.useState(1);

    const [query, setQuery] = React.useState("");

    return (
        <Wrapper>
            <Panel width="100%" height="50%" column>
                <Panel.Header>
                    <Tabs value={activeInputTab} onChange={(event, newValue) => {
                        setActiveInputTab(newValue);
                    }} aria-label="input tab">
                        <Tab label="SQL Input" />
                    </Tabs>
                    <Box sx={{ '& button': { m: 1 } }}>
                        <Button size="small" variant="contained" sx={{ borderRadius: "4px" }}
                            onClick={() => {
                                setResults(availableQueries?.find((item) => {
                                    return (item.query === query)
                                })?.result)
                            }}>
                            Run SQL
                        </Button>
                    </Box>
                </Panel.Header>
                <TabPanel activeTab={activeInputTab} id={0}>
                    <SQLInput value={query} onChange={(e) => {
                        setQuery(e.target.value)
                    }} rows={20} placeholder='Write your SQL query here...' />
                </TabPanel>
            </Panel>
            <Divider sx={{ borderColor: "var(--grey-200)" }} />
            <Panel width="100%" height="100%" column >
                <Panel.Header>
                    <Tabs
                        value={activeInfoTab}
                        onChange={(event, newValue) => {
                            setActiveInfoTab(newValue);
                        }}
                        aria-label="Info tabs"
                        variant="scrollable"
                        scrollButtons="false">

                        <StyledTab label="Output" hideOnDesktop />
                        <Tab label="Available Queries" />
                        <Tab label="Tables" />
                        <Tab label="Schemas" />
                    </Tabs>
                </Panel.Header>
                <TabPanel column activeTab={activeInfoTab} id={0} hideOnDesktop>
                    <OutputPanel result={result} />
                </TabPanel>
                <TabPanel column activeTab={activeInfoTab} id={1}>
                    {
                        availableQueries.map((item) => (
                            <Accordion style={{
                                border: '1px solid var(--grey-100)'
                            }}>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Stack style={{ width: "100%" }} direction="row"
                                        justifyContent="space-between" alignItems="center" spacing={2} >
                                        <Typography>{item.name}</Typography>
                                        <Button
                                            size="small"
                                            variant="contained" sx={{ borderRadius: "4px" }}
                                            onClick={() => {
                                                setResults(item.result)
                                                setQuery(item.query)
                                            }}>
                                            Run
                                        </Button>
                                    </Stack>
                                </AccordionSummary>
                                <StyledAccordinDetails>
                                    <Typography>
                                        {item.query}
                                    </Typography>
                                </StyledAccordinDetails>
                            </Accordion>
                        ))
                    }
                </TabPanel>
                <TabPanel gap={"24px"} column activeTab={activeInfoTab} id={2}>
                    <DataTable name="Categories Table" columns={categoriesSchema} items={categories} />
                    <DataTable name="Customers Table" columns={customerSchema} items={customers} />
                </TabPanel>
                <TabPanel gap={"24px"} column activeTab={activeInfoTab} id={3}>
                    <DataTable name="Categories Schema" columns={schemaColumnDefinition} items={categoriesSchema} />
                    <DataTable name="Customer Schema" columns={schemaColumnDefinition} items={customerSchema} />
                </TabPanel>
            </Panel>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const TabPanel = styled.section`
    display: ${props => (props.id === props.activeTab) ? "flex" : "none"};
    padding: 12px;
    flex-direction: ${props => props.column ? "column" : "row"};
    overflow: auto;
    max-height: 300px;
    gap: ${props => props.gap};

    @media ${QUERIES.tabletOrLarger} {
        display: ${props => (!props.hideOnDesktop && (props.id === props.activeTab)) ? 'flex' : "none"};
    }
`

const SQLInput = styled.textarea`
    width: 100%;
    resize: none;
    outline: none;
    border: none;
`

const StyledAccordinDetails = styled(AccordionDetails)`
    background-color: var(--grey-100);
    padding: 12px;
`

const StyledTab = styled(Tab)`
    @media ${QUERIES.tabletOrLarger} {
        display: ${props => props.hideOnDesktop ? 'none' : "revert"};
    }
`