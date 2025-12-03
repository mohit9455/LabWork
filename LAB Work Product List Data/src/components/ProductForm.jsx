import React, { useEffect, useState } from 'react'
const API = 'http://localhost:4000/api/products'


export default function ProductForm({ editing, onSaved }){
const [productname, setProductname] = useState('')
const [quantity, setQuantity] = useState(0)
const [price, setPrice] = useState(0)


useEffect(() => {
if (editing) {
setProductname(editing.productname)
setQuantity(editing.quantity)
setPrice(editing.price)
} else {
setProductname('')
setQuantity(0)
setPrice(0)
}
}, [editing])


const submit = async (e) => {
e.preventDefault()
const body = { productname, quantity: Number(quantity), price: Number(price) }
if (editing) {
await fetch(`${API}/${editing.productid}`, { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body) })
} else {
await fetch(API, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body) })
}
onSaved()
}


return (
<form onSubmit={submit} className="mb-6">
<input value={productname} onChange={e=>setProductname(e.target.value)} placeholder="Product name" required />
<input type="number" value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder="Quantity" required />
<input type="number" step="0.01" value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" required />
<button type="submit">{editing ? 'Update' : 'Add'}</button>
</form>
)
}