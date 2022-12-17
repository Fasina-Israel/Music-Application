import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import TableRow from '@mui/material/TableRow';
import './song.css'
import { useNavigate } from 'react-router-dom';
import { CiShuffle } from 'react-icons/ci'

const columns = [
    { id: 'firstName', label: 'Title', minWidth: 130, backgroundColor: 'grey' },
    { id: 'dateAdded', label: 'Artist', minWidth: 130 },
    {
        id: 'approvedBy',
        label: 'Album',
        minWidth: 130,
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'cohortRepaymentStatus',
        label: 'Date',
        minWidth: 130,
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'lengthOfOperation',
        label: 'Genre',
        minWidth: 130,
        format: (value) => value.toFixed(2)
    },

    {
        id: 'action',
        label: 'Duration',
        minWidth: 130
    }
];

const Song = () => {

    const navigate = useNavigate();
  return (
    <>
    <div className="filter">
        <div className="filter-text">
            Shuffle All:
        </div>
        <div className="filter-text">
            Sort By:
        </div>
        <div className="filter-text">
            Genre:
        </div>
    </div>
    <div className="line">
        <hr />
    </div>
    <div className="music-search">
        <div className="music-search-text">
            Not Finding everything ?
        </div>
        <div className="music-search-link" onClick={()=> navigate('./hello')}>
           Show us where to find
        </div>
        
    </div>
    <div className="table-side-cards" style={{ display: 'flex',
                                         columnGap: '9px', 
                                         width: '100%', 
                                         marginLeft: '0px', 
                                         justifyContent: 'left', 
                                         alignItems: 'left' 
                                         }}
                                         >
        <Paper className="table-paper" sx={{ width: '100%', height: '40%', marginTop: '25px', paddingBottom: '50px' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                            {column.label}
                                        </TableCell>
                                    ))}
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
                </>
  )
}

export default Song