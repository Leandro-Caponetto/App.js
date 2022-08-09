import Detail  from "./Detail"


function ItemDetail({productos}) {
  return (
    <ul>

            
            {productos.map((producto) => {
                return <Detail 
                    key={producto.id}
				    title={producto.title}
				    image={producto.image}
				    category={producto.category}
				    precio={producto.price}
				    id={producto.id}/>


            })}

    </ul>
  )
}
export default ItemDetail