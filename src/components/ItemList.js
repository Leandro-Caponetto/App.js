import Item from './Item'
import './ItemList.css'


function ItemList({productos}) {

  
  return (
      <ul>

        {productos.map((producto) => {
            return <Item producto={producto}/>


          })}

      </ul>

  )
}
export default ItemList