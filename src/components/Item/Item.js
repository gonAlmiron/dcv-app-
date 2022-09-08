import { useNavigate } from "react-router-dom"
import { terrario } from "../../data/terrario";


const Item = ( {producto} ) => {
    let navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/ItemDetail/${terrario.id}`)
    }

    return (
        <div className="container mb-4">
                <img className="foto" src={producto.img}/>
                <h4>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <small>Stock disponible: {producto.stock}</small>
                <p>{producto.descripcion}</p>
                <a className="btn btn-primary my-2">Ver más</a>
        </div>
    )
}

export default Item