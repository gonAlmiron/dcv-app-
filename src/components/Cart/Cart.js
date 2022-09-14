import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Card } from "react-bootstrap";


const Cart = () => {

    const { cart } = useContext(CartContext)

    return (

        <div className="container my-5">
            <h2>Tu carrito</h2>
           <hr/>
           { cart.map((producto)=> (
               <Card key={producto.id} className="container mb-5" style={{width: '25rem'}}>
               <Card.Img src={producto.img} alt={producto}/>
                <Card.Body key={producto.id}>
                   <Card.Title>{producto.nombre}</Card.Title>
                   <p>Precio: ${producto.precio}</p>
                   <Card.Text>{producto.descripcion}</Card.Text>
   
                </Card.Body>
           </Card>
            ))
           }
        </div>
    )

}

export default Cart
