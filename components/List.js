import React, { useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext';
import Link from 'next/link'

function List() {
    const { items, deleteItem } = useContext(ItemContext)
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} id="items">
                    <Link href={`/${item.id}`}><span id="itemName">{item.text}</span></Link>

                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteItem(item.id)}>X</button>
                </div>
            ))}
        </div>
    )
}

export default List
