import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../../rtk/books/booksSlice';
import { RootState, Book } from '../../../../types'; 
import { AppDispatch } from '../../../../rtk/store';
import { Grid, Stack, useTheme, Pagination, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { getRandomImage } from '../../../../Shared/constant/ListImages';
import Loading from '../../../../Shared/components/Loading';



const BooksList = () => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const books = useSelector((state: RootState) => state.books.items);
  const bookStatus = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [bookStatus, dispatch]);

  if (bookStatus === 'loading') {
    return <Loading/>;
  }

  if (bookStatus === 'failed') {
    return <div>{error}</div>;
  }

  // Calculate the books to display on the current page
  const startIndex = (currentPage - 1) * booksPerPage;
  const paginatedBooks = books.slice(startIndex, startIndex + booksPerPage);

  return (
    <Stack className={`w-[85%] h-[100%]  me-8 mx-auto mb-12 ${isDarkMode ? 'bg-[061C2B]' : 'bg-white'}`}>
      <Grid container spacing={{ xs: 2, md: 5 }} paddingX={4}>
        {paginatedBooks.map((book: Book) => (
          <Grid key={book._id} item xs={12} sm={6} md={4} display='flex' flexDirection="column" justifyContent='center' alignItems='center' gap={2}>
            <Stack className={`bg-white rounded p-4 group relative transition-all ease-out duration-500 ${!isDarkMode ? 'border-2': '' }`}>
              <Link to={`/home/books/${book._id}`} className="hidden group-hover:flex group-hover:duration-300 rounded bg-[#ED553B] uppercase py-5 px-2 lg:px-12 text-white absolute top-1/2 left-16 lg:left-8 z-20 transition-transform duration-300 ease-in-out hover:scale-105 justify-center items-center text-nowrap gap-3">
                View Details <FaLongArrowAltRight />
              </Link>
              <img
                src={getRandomImage()}
                alt="Book Cover"
                className="max-w-full transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </Stack>
            <h3 className={`${isDarkMode ? 'text-white' : 'text-[#393280]'} leading-8 text-sm lg:text-[24px] font-semibold`}>
              {book.name}
            </h3>
            <span className="text-sm font-normal">{book.auther}</span>
            <span className={`text-sm lg:text-[18px] ${isDarkMode ? 'text-white' : 'text-[#ED553B]'} font-bold`}>
              $ {book.price}
            </span>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Component */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4}}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="circular"
          size="large"
          sx={{
            '& .MuiPaginationItem-root': {
              color: isDarkMode ? 'white' : '#ED553B', // Text color based on theme
              borderColor: isDarkMode ? 'white' : '#ED553B', // Border color based on theme
              '&.Mui-selected': {
                backgroundColor:  '#ED553B', // Background for selected item
                color: 'white' , // Selected text color
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
};

export default BooksList;
