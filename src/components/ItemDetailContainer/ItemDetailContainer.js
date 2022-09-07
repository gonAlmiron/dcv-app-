import {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
// import { useParams } from 'react-router-dom'
import { getItem } from "../../helpers/getItem"


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    // let {itemId} = useParams()
    useEffect(() => {
        getItem()
        .then((res) => {
            setItem(res)
            // setItem(res.find((item) => item.id === Number(itemId)))
        })
        .catch(err => console.log(err))
    }, [])

    return (

        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer

