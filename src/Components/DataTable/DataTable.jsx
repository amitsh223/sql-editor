import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import styled from '@emotion/styled';

export default function DataTable({ name, columns, items }) {
    return (
        <TableContainer sx={{ minHeight: 200 }} component={Paper}>
            <Table stickyHeader size="small" aria-label={name}>
                <TableHead >
                    <TableRow >
                       <StyledTableCell colSpan={4}>
                        {name}
                       </StyledTableCell>
                    </TableRow>
                    <TableRow >
                        {
                            columns?.map((col) => (
                                <StyledTableCell>{col.label}</StyledTableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody >
                    {
                        items.map((item,index) => (
                            <TableRow key={index}>
                                {
                                    columns.map((col) =>{
                                        const value = item[col.id];
                                        return (
                                            <TableCell >{value}</TableCell>
                                        );
                                    })
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const StyledTableCell = styled(TableCell)`
    background-color: var(--grey-000);
    font-weight: 600;
`
