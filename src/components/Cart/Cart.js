import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"


const Cart = () => {

    const { cart } = useContext(CartContext)    

    return (

        <div className="container my-5">
            <h2>Tu carrito</h2>
           <hr/>
           { cart.map((producto)=> (
               <Card key={producto.id} className="container mb-5" style={{width: '25rem'}}>
               <Card.Img src={producto.img}/>
                <Card.Body>
                   <Card.Title>{producto.nombre}</Card.Title>
                   <p>Precio: ${producto.precio}</p>
                   <small>Stock disponible: {producto.stock}</small>
                   <Card.Text>{producto.descripcion}</Card.Text>
   
                </Card.Body>
           </Card>
            ))
           }
        </div>
    )

}

export default Cart
