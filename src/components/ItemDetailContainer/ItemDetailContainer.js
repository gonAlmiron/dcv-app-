import {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'

// import { getItem } from "../../helpers/getItem"
import { pedirDatos } from "../../helpers/pedirDatos"

import Spinner from "../Spinner/Spinner"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    console.log(itemId)

    useEffect(() => {

        setLoading()
        pedirDatos()
        .then((res) => {
            setItem( res.find((prod) => prod.id === Number(itemId)) )
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false)
        })
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

