import {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { getItem } from "../../helpers/getItem"
// import { pedirDatos } from "../../helpers/pedirDatos"
import Spinner from "../Spinner/Spinner"


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState (true)

    let {itemId} = useParams()

    useEffect(() => {

        setLoading()
        getItem()
        // pedirDatos()
        .then((res) => {
            setItem(res)
            // setItem(res.find((item) => item.id === Number(itemId)))
        })
        .catch(err => console.log(err))
    }, [])

    return (

        <div>
            { loading ? 
            <Spinner/>
            :
            <ItemDetail item={item}/>
            
}
        </div>
    )
}

export default ItemDetailContainer

