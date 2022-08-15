
import ItemCount from './ItemCount';


function ItemDetail( { productos }) {
    return (
        <section className="items">
            {productos.map((producto) => {
                return <ItemCount key={producto.id} producto={producto}/>
            })}
        </section>
    )
}

export default ItemDetail 
