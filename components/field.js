import React, { useState } from 'react'
import styles from '../styles/Field.module.css'
function Field(props) {
    const [input, setInput] = useState('');
    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            qty: 0,
            text: input
        })
        setInput('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    id="input"
                    name="itemname"
                    placeholder="Enter item name"
                    autoComplete="off"
                    onChange={handleChange}
                    value={input}
                    required>
                </input>
                <button type="submit">+</button>
            </form>

        </>
    )
}

export default Field
