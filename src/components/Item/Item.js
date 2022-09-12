import { useNavigate } from "react-router-dom";
import { terrario } from "../../data/terrario";
import { Link } from "react-router-dom";
import {Card} from "reactstrap";



const Item = ( {producto} ) => {
    let navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/ItemDetail/${terrario.id}`)
    }

    return (
        <Card className="container mb-5" style={{width: '30rem'}}>
                <img className="foto" src={producto.img}/>
                <h4>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <small>Stock disponible: {producto.stock}</small>
                <p>{producto.descripcion}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
        </Card>
    )
}

export default Item