import { useState, useEffect } from "react"
import {pedirDatos} from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(()=> {
        pedirDatos()
        .then ((res) => {
            setProductos(res)
            if (!categoryId) {
                setProductos(res)
            } else {
                setProductos( res.filter((prod) => prod.category === categoryId) )
            }
        
        })
        .catch((error) => {
            console.log(error)
        })
        
    }, [])



    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer