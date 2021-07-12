import React, {useState} from 'react'

function Counter() {
    const [value, setValue] = useState(0)
    const decrement = () =>{
        setValue( e => e - 1 )
    }
    const increment = () =>{
        setValue( e => e + 1 )
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>

        </div>
    )
}

export default Counter
