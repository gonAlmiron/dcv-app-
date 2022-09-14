import { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to="/cart">
          <ShoppingCartIcon/>
            <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget