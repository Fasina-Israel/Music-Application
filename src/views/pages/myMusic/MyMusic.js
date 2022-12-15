import React from 'react'
import './myMusic.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import TableRow from '@mui/material/TableRow';

const MyMusic = () => {
  return (
    <div className="container">
      <div className="title"> My Music</div>
      <div className="header">
        <div className="header-text">
          Songs
        </div>
        <div className="header-text">
          Artists
        </div>
        <div className="header-text">
          Albums
        </div>
      </div>
      <div className="line">
          <hr />
      </div>
      <Paper className="table-paper" sx={{ width: '65%', height: '40%', marginTop: '25px', paddingBottom: '50px' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {/* {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))} */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {filterData?.map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map(({ id, align }) => {
                                            const value = id && row[id];
                                            console.log(value, 'value');
                                            return (
                                                <TableCell sx={{ width: '15px' }} key={`${id} ${index}`} align={align}>
                                                    {id === 'dateAdded' ? <Moment format="DD/MM/YYYY,h:mm:ss a">{value}</Moment> : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })} */}
                        </TableBody>
                    </Table>
                </TableContainer>
                </ Paper>
    </div>
  )
}

export default MyMusic