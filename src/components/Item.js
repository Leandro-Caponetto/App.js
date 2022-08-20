import { Link } from "react-router-dom"


const Item = ({ producto }) => {

  return (
    <article className="item">
      <img src={producto.image} alt="" width={200}/>
      <h2 className="item__title">{producto.category}</h2>
      <p>{producto.title}</p>
      <p className="item__price">Precio : ${producto.price}</p>
      <Link to={`/detalle/${producto.id}`} className="item__button">ver detalle</Link>
      
    </article>
  )
}
export default Item