const express = require('express');
const router = express.Router();
const pool = require('../db');


// GET all products
router.get('/', async (req, res) => {
try {
const [rows] = await pool.query('SELECT * FROM products');
res.json(rows);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Database error' });
}
});

// GET single product
router.get('/:id', async (req, res) => {
try {
const [rows] = await pool.query('SELECT * FROM products WHERE productid = ?', [req.params.id]);
if (!rows.length) return res.status(404).json({ error: 'Not found' });
res.json(rows[0]);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Database error' });
}
});


// CREATE product
router.post('/', async (req, res) => {
const { productname, quantity, price } = req.body;
try {
const [result] = await pool.query(
'INSERT INTO products (productname, quantity, price) VALUES (?, ?, ?)',
[productname, quantity, price]
);
const [rows] = await pool.query('SELECT * FROM products WHERE productid = ?', [result.insertId]);
res.status(201).json(rows[0]);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Database error' });
}
});


// UPDATE product
router.put('/:id', async (req, res) => {
const { productname, quantity, price } = req.body;
try {
await pool.query(
'UPDATE products SET productname = ?, quantity = ?, price = ? WHERE productid = ?',
[productname, quantity, price, req.params.id]
);
const [rows] = await pool.query('SELECT * FROM products WHERE productid = ?', [req.params.id]);
if (!rows.length) return res.status(404).json({ error: 'Not found' });
res.json(rows[0]);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Database error' });
}
});


// DELETE product
router.delete('/:id', async (req, res) => {
try {
const [result] = await pool.query('DELETE FROM products WHERE productid = ?', [req.params.id]);
if (result.affectedRows === 0) return res.status(404).json({ error: 'Not found' });
res.json({ message: 'Deleted' });
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Database error' });
}
});


module.exports = router;