import './ItemList.css'

function ItemList({name,titulo}) {
  return (
    <div>
         <h1  className="name">{name} </h1>
         <h3>{titulo}</h3>  
     </div>
  )
}
export default ItemList