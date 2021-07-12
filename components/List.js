import React, { useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext';
import Counter from './Counter';
function List() {
    const { items, deleteItem } = useContext(ItemContext)
    
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} id="items">
                    <span id="itemName">{`${item.text}${item.qty}`}</span>
                    <Counter id={item.id} qty={item.qty}/>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteItem(item.id)}>X</button>
                </div>
            ))}
        </div>
    )
}

export default List
