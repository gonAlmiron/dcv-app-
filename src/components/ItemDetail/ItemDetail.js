import Item from "../Item/Item"

const ItemDetail = ({item = []} ) => {

    return (
        <div className="container my-5">
            <h4>Detalle del producto</h4>
         <hr/>
            { item.map((prod) => <Item producto={prod} key={prod.id}/>) }  
        </div>
    )
}

export default ItemDetail

