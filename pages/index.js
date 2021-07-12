import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Field from '../components/Field'
import List from '../components/List'
import { ItemContext } from '../contexts/ItemContext';
export default function Home() {
  const [items, setItems] = useState([])
  const addItem = item => {
    const newItems = [ ...items, item]
    setItems(newItems)
  }
  const deleteItem = id => {
    let newArr = [...items].filter(item => item.id !== id)
    setItems(newArr)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Grocerify</title>
        <meta name="description" content="web grocery list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Field onSubmit={addItem} />
      <ItemContext.Provider value={{ items, deleteItem }}>
        <List />
      </ItemContext.Provider>

    </div>
  )
}
