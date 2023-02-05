import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContextProvider';

export const useCart = () => useContext(CartContext);