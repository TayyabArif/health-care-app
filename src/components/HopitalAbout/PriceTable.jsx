import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('COVID-19 PCR Qualitative', 6500),
  createData('Urine C/E', 350),
  createData('Liver Function Test (LFTs)', 1350),
  createData('CBC For (Dengue)', 90),
  createData('HbA1C', 1400),
  createData('HbA1C', 1400),
  createData('Pap Smear', 1650),
];

export default function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Test Name&nbsp;(g)</TableCell>
            <TableCell align="center">Rate&nbsp;(in PKR)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
