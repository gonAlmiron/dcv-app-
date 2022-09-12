import Item from "../Item/Item"
import { useParams } from "react-router-dom"


const ItemDetail = ({item = []} ) => {
    let {itemId } = useParams();

    return (
        <div className="container my-5">
            <h4>Detalle del producto</h4>

         <hr/>
            { item.map((prod) => <Item producto={prod} key={prod.id}/>) }  
        </div>
    )
}

export default ItemDetail

