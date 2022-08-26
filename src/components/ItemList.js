import React from 'react'
import Item from './Item'

function ItemList({ productsArray }) {
    return (
        <div className='row col-xl-11 mx-auto'>
            {productsArray.map((element, index) => {
                return <Item key={index} item={element} />
            })}
        </div>
    )
}

export default ItemList