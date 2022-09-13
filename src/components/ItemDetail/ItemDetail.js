import Item from "../Item/Item"
import { useParams } from "react-router-dom"
import ItemCount from "../ItemListContainer/ItemCount";
import { useState } from "react";


const ItemDetail = ({item}) => {
    let {itemId } = useParams();

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        console.log({
            ...item,
            cantidad
        })
    }

    return (
        <div className="container my-5">
            <h4>Detalle del producto</h4>

         <hr/>
            { item.map((prod) => <Item producto={prod} key={prod.id}/>) }   
            <ItemCount
            counter={cantidad}/>
        </div>
    )
}

export default ItemDetail

