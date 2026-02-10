import { useState } from 'react'
import Card from './Card'

function App() {

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 60000,
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 20000,
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Jeans',
      price: 1500,
      category: 'Clothing'
    }
  ]

  return (
    <>
      {/* <Card id={products[0].id} name={products[0].name} price={products[0].price} category={products[0].category} />
      <Card id={products[1].id} name={products[1].name} price={products[1].price} category={products[1].category} />
      <Card id={products[2].id} name={products[2].name} price={products[2].price} category={products[2].category} /> */}

      {products.map((vals)=>(
        <Card key={vals.id} id={vals.id} name={vals.name} price={vals.price} category={vals.category} />
      ))}
    </>
  )
}

export default App
