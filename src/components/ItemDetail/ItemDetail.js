import ItemCount from "../ItemListContainer/ItemCount";
import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

    const {cart, addToCart, isInCart} = useContext(CartContext)
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
      
        }
        console.log(itemToCart)

        console.log(isInCart(item.id))
        addToCart(itemToCart)
    }

    return (
        <Card className="container my-5" style={{width: '25rem'}}>
         
            <Card.Img src={item.img} alt={item}/>
            <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <hr/>
            <Card.Title>Detalle del producto</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            <Card.Text>Precio: ${item.precio}</Card.Text>
            <hr/>

           {
           isInCart(item.id)
           ?  <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
           : <ItemCount 
           max={item.stock}
           counter={cantidad}
           setCounter={setCantidad}
           handleAgregar={handleAgregar}/>
        }
            

        
              
        </Card.Body>
        </Card>
    )
 
}

export default ItemDetail

