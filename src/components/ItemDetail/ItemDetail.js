<<<<<<< HEAD
const ItemDetail = ({item}) => {
=======
import Item from "../Item/Item"
import { useParams } from "react-router-dom"
import ItemCount from "../ItemListContainer/ItemCount";
import { useState } from "react";


const ItemDetail = ({item}) => {
    let {itemId } = useParams();
>>>>>>> be28ba17e61125185443cdf36da79071011ec812

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        console.log({
            ...item,
            cantidad
        })
    }

    return (
        <div className="container my-5">
<<<<<<< HEAD
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
=======
            <h4>Detalle del producto</h4>

         <hr/>
            { item.map((prod) => <Item producto={prod} key={prod.id}/>) }   
            <ItemCount
            counter={cantidad}/>
>>>>>>> be28ba17e61125185443cdf36da79071011ec812
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

