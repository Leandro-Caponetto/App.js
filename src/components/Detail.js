import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./context/DataProvider";

function Detail({title, image, category, precio, id}) {
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

  return (

    <div className="container ">
            <div key={id} className="card producto">
                <Link to={`/producto/${id}`}>
                <div className="producto__img">
                    <img src={image} alt={title} />
                </div>
                </Link>
                <div className="producto__footer">
                    <h1>{title}</h1>
                    <p><span>marca:</span> {category}</p>
                    <p className="precio"><span> precio:</span> ${precio} </p>
                </div>
               
                <div className="bottom">
                    <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
                        
                    <div>
                    <Link to={`/producto/${id}`} className="btn">Vista</Link>
                    </div>
                </div>
               
        </div>

    </div>    
    
  )
}
export default Detail