import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material';
import { BASE_URL } from '../../../../Shared/constant/Api';
import axios from 'axios';
import CustomButton from '../../../../Shared/components/CustomButton';
import { FaTentArrowTurnLeft } from 'react-icons/fa6';
import Loading from '../../../../Shared/components/Loading';
import { addItem } from '../../../../rtk/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { Book } from '../../../../types';
import Header from '../../../../Shared/components/Header/Header';

const BookDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams<{ bookId: string }>(); 
  const [book, setBook] = useState<Book | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const token = localStorage.getItem('token') || ''; 

  const handleAddToCart = () => {
    if (book) {
      const formattedBook = {
        id: book._id,
        name: book.name || book.title, // Ensure this matches the expected structure
        title: book.title || book.name, // Mapping title
        image: book.image || '/assets/books/book1.png', // Provide a default image if not present
        price : book.price,
      };
      dispatch(addItem(formattedBook));
      console.log(formattedBook);  // Log the formatted book for debugging
    }
  };
  useEffect(() => {
    const getBookDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/book/${bookId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data); // Log the API response for debugging
        setBook(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch book details.');
      } finally {
        setLoading(false);
      }
    };
  
    if (token) {
      getBookDetails();
    } else {
      setError('Authorization token is missing.');
    }
  }, [bookId, token]);
  

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!book) {
    return <div>No book details available.</div>;
  }

  return (
    <>
    <Header>
        <Header.HeaderTop />
        <Header.Actions />
        <Header.Logo />
        <Header.Icons />
      </Header>
      <div className={`mt-12 relative top-6 left-2 w-12 rounded-full flex justify-center items-center h-12 ${isDarkMode ? 'bg-[#ED553B]' : 'bg-[#061C2B]'}`}>
        <Link to="/home/books" className={`${isDarkMode ? 'text-[#061C2B]' : 'text-[#ED553B]'}`}>
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
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={4} justifyContent='center' alignItems='center' mt={8}>
          <img
            src={book.image || '/assets/books/book.png'}
            alt={book.name}
            style={{ width: '300px', height: 'auto' }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', justifyContent: 'space-between', gap: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ color: isDarkMode ? '#ED553B' : '#061C2B' }}>
              {book.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {book.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: isDarkMode ? '#ED553B' : '#061C2B' }}>
              Author: {book.auther}
            </Typography>
            <Typography variant="h6" color="secondary" gutterBottom sx={{ color: isDarkMode ? '#ED553B' : '#061C2B' }}>
              Price: ${book.price}
            </Typography>
            <CustomButton onClick={handleAddToCart}>
              Add to Cart
            </CustomButton>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default BookDetails;
