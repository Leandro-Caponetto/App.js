

function Item({producto}) {
  return (
        <article className="item">
            <img src={producto.image} alt="" />
            <h2 className="item__title">{producto.nombre}</h2>
            <p className="item__price">Precio : ${producto.precio}</p>

        </article>
  )
}
export default Item