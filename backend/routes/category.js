const express = require('express');
const router = express.Router();

const Category = require('../models/category');

router.get('/category', (req, res) => {
    Category.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/category/:id', (req, res) => {
    Category.findById(req.params.id, (errr, data) => {
        res.json(data);
    })
})

router.delete('/category/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ 'message': 'Delete' })
});

router.post('/category', (req, res) => {
    category = new Category({
        name: req.body.name,
        slug: req.body.slug

    })
    category.save(() => {
        res.json(category);
    })
})

router.put('/category/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id, req.body);
    res.json({ 'message': 'Updeted' })
})


module.exports = router