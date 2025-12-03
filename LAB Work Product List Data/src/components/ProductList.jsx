import React from 'react'


export default function ProductList({ products, onEdit, onDelete }){
return (
<table>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Quantity</th>
<th>Price</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{products.map(p => (
<tr key={p.productid}>
<td>{p.productid}</td>
<td>{p.productname}</td>
<td>{p.quantity}</td>
<td>{p.price}</td>
<td>
<button onClick={() => onEdit(p)}>Edit</button>
<button onClick={() => onDelete(p.productid)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
)
}