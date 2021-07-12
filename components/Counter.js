import React, {useState} from 'react'

function Counter({id, qty}) {
    const [value, setValue] = useState(qty)
    qty = value
    const decrement = () =>{
        setValue( e => e - 1 )
    }
    const increment = () =>{
        setValue( e => e + 1 )
    }
    console.log(`${id}-${qty}`)
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{qty}</span>
            <button onClick={increment}>+</button>

        </div>
    )
}

export default Counter
