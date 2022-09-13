import { useParams } from "react-router-dom"
import ItemCount from "../ItemListContainer/ItemCount";
// import { useState } from "react";
// import Item from "../Item/Item";


const ItemDetail = ({item}) => {
    // let {itemId} = useParams();


    return (
        <div className="container my-5">
         
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>

            <h4>Detalle del producto</h4>

         <hr/>
         <ItemCount/>
         {/* { item.map((prod) =>
             <Item producto={prod} key={prod.id}/>) }    */}
        </div>
    )
}



export default ItemDetail








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
