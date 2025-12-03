import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'


const API = 'http://localhost:4000/api/products'


export default function App() {
const [products, setProducts] = useState([])
const [editing, setEditing] = useState(null)


const fetchProducts = async () => {
const res = await fetch(API)
const data = await res.json()
setProducts(data)
}


useEffect(() => { fetchProducts() }, [])


return (
<div className="p-6">
<h1 className="text-2xl mb-4">Product Management</h1>
<ProductForm
onSaved={() => { fetchProducts(); setEditing(null) }}
editing={editing}
/>
<ProductList
products={products}
onEdit={(p) => setEditing(p)}
onDelete={async (id) => { await fetch(`${API}/${id}`, { method: 'DELETE' }); fetchProducts() }}
/>
</div>
)
}