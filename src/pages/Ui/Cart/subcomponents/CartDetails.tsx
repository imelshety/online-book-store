import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow, Grid, IconButton, useTheme, Stack } from '@mui/material';
import { RootState } from '../../../../rtk/store'; // Adjust the path to your Redux store
import { removeItem, increaseQuantity, decreaseQuantity } from '../../../../rtk/cart/cartSlice'; // Adjust the import paths
import { FaTrashAlt } from 'react-icons/fa'; // Trash icon for remove button
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

interface CartDetailsProps {
  onSubtotalChange: (subtotal: number) => void;
}

const CartDetails: React.FC<CartDetailsProps> = ({ onSubtotalChange }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items); // Retrieve cart items from Redux store
  const dispatch = useDispatch();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.book.price, 0);

  // Call the onSubtotalChange prop to pass subtotal up to parent
  onSubtotalChange(subtotal);

  const handleIncreaseQuantity = (bookId: number) => {
    dispatch(increaseQuantity(bookId)); // Action to increase quantity
  };

  const handleDecreaseQuantity = (bookId: number) => {
    dispatch(decreaseQuantity(bookId)); // Action to decrease quantity
  };

  const handleRemoveItem = (bookId: number) => {
    dispatch(removeItem(bookId)); // Action to remove item from the cart
  };

  return (
    <Grid item xs={12} md={8}>
      <Table
        sx={{ background: 'linear-gradient(45deg, #FFE5E5, #F5FFFE)' }}
        aria-label="cart items table"
        className="shadow-2xl rounded-2xl w-full"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}}>Num</TableCell>
            <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}}>Book</TableCell>
            <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}} align="center">Amount</TableCell>
            <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}} align="center">Cost&nbsp;(USD)</TableCell>
            <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}} align="center">Subtotal&nbsp;(USD)</TableCell>
            <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item, index) => (
            <TableRow key={item.book.id}>
              <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}}>{index + 1}.</TableCell>
              <TableCell>
                <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}>
                  <img src={item.book.image || `/assets/books/book.png`} alt={item.book.name} style={{ width: '50px', marginRight: '10px' }} />
                  <Stack sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}}>{item.book.title}</Stack>
                </div>
              </TableCell>
              <TableCell align="center">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                  <CiCircleMinus  onClick={() => handleDecreaseQuantity(item.book.id)} className={`text-2xl cursor-pointer text-[#ED553B]`}/>
                 <Stack sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}}> {item.quantity}</Stack>
                  <CiCirclePlus onClick={() => handleIncreaseQuantity(item.book.id)}  className='text-2xl cursor-pointer text-[#ED553B]'/>
                </div>
              </TableCell>
              <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}} align="center">{item.book.price}$</TableCell>
              <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}} align="center">{item.quantity * item.book.price}$</TableCell>
              <TableCell sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}} align="center">
                <IconButton sx={{color : isDarkMode ?'#ED553B': '#393280', fontWeight:'bold'}} onClick={() => handleRemoveItem(item.book.id)}>
                  <FaTrashAlt />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default CartDetails;
