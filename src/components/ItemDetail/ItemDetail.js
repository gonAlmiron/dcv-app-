// import { useParams } from "react-router-dom"
import ItemCount from "../ItemListContainer/ItemCount";
// import { useState } from "react";
// import Item from "../Item/Item";
import Card from 'react-bootstrap/Card';

const ItemDetail = ({item}) => {

    return (
        <Card className="container my-5" style={{width: '25rem'}}>
         
            <Card.Img src={item.img} alt={item}/>
            <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>

            <h4>Detalle del producto</h4>
            <hr/>
            <ItemCount/>
            </Card.Body>
        </Card>
    )
}



export default ItemDetail



//   {/* { item.map((prod) =>
//              <Item producto={prod} key={prod.id}/>) }    */}




// import Item from "../Item/Item"
// import { useParams } from "react-router-dom"


// const ItemDetail = ({item = []} ) => {
//     let {itemId } = useParams();

//     return (
//         <div className="container my-5">
//             <h4>Detalle del producto</h4>

//          <hr/>
//             { item.map((prod) => <Item producto={prod} key={prod.id}/>) }  
//         </div>
//     )
// }

// export default ItemDetail
