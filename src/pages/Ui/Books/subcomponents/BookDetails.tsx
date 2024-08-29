/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material';
import { BASE_URL } from '../../../../Shared/constant/Api';
import axios from 'axios';
import { Book } from '../../../../types';
import CustomButton from '../../../../Shared/components/CustomButton';
import { FaTentArrowTurnLeft } from 'react-icons/fa6';

const BookDetails = () => {
  const { bookId } = useParams<{ bookId: string }>(); // Ensure bookId is typed correctly
  console.log(typeof bookId, bookId); // Check type and value of bookId
  const [book, setBook] = useState<Book | null>(null); // Use type for the book
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Example token, replace with your logic to get the token
  const token = localStorage.getItem('token') || ''; // Replace with actual method to get the token

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/book/${bookId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        setBook(response.data); // Ensure that this aligns with the response data structure
        console.log(response.data);
      } catch (err) {
        console.error(err); // Log the error for debugging
        setError('Failed to fetch book details.');
      } finally {
        setLoading(false);
      }
    };

    if (token) { // Check if token exists before making the request
      getBookDetails();
    } else {
      setError('Authorization token is missing.');
    }
  }, [bookId, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!book) {
    return <div>No book details available.</div>;
  }

  return (
    <>
    <div className={`relative top-6 left-2 w-12 rounded-full flex justify-center items-center h-12 ${isDarkMode?'bg-[#ED553B]':'bg-[#061C2B]'}`}>
        <Link to="/home/books" className={`${isDarkMode?'text-[#061C2B]':'text-[#ED553B]'}`}>
        <FaTentArrowTurnLeft className='text-2xl'/> 
        </Link>
    </div>
    <Box
      sx={{
        p: 4,
        backgroundColor: isDarkMode ? '#061C2B' : 'white',
        color: isDarkMode ? 'white' : 'black',
      }}
    >
      <Stack   direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={4} justifyContent='center' alignItems='center' >
        <img
          src={book.image || '/assets/books/book.png'} // Fallback image if none available
          alt={book.name}
          style={{ width: '300px', height: 'auto' }}
        />
        <Box sx={{display:'flex' , flexDirection:'column', alignItems:'baseline',justifyContent:'space-between', gap:'20px'}}>
          <Typography variant="h4" gutterBottom sx={{color : isDarkMode ? '#ED553B' : '#061C2B'}}>  
            {book.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {book.description}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{color : isDarkMode ? '#ED553B' : '#061C2B'}}>
            Author: {book.auther}
          </Typography>
          <Typography variant="h6" color="secondary" gutterBottom sx={{color : isDarkMode ? '#ED553B' : '#061C2B'}}>
            Price: ${book.price}
          </Typography>
         <CustomButton>
           <Link to='/'> add to cart</Link>
         </CustomButton>
        </Box>
      </Stack>
    </Box>
    </>

  );
};

export default BookDetails;
