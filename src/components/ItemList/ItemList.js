import Item from "../Item/Item"

const ItemList = ( {productos = []} ) => {
    return (     
    
    <div className="row">
    <h3>Productos</h3>
    <hr/>
        { productos.map((prod) => (
        
    <div className="col-4">
        <Item producto={prod} key={prod.id}/>
        </div> 
        ))
        }
</div>
)
}


export default ItemList