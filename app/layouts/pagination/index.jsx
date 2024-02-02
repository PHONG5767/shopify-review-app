import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({ currentPage, handleChangePage, totalReviews, reviewsPerPage }) {
    const pageCount = Math.ceil(totalReviews / reviewsPerPage);
  
    return (
      <Stack spacing={2}>
        <Pagination count={pageCount} page={currentPage} onChange={handleChangePage} />
      </Stack>
    );
  }
