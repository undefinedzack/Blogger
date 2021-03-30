const router = require('express').Router()
let Blog = require('../models/blogs.model')

router.get('/', async (req, res) => {
    try{
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try{

        const blog = await Blog.find({_id : req.params.id})
        res.json(blog)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', (req, res) => {
    console.log(req.body)
    const blog = new Blog({
        title : req.body.title,
        date : req.body.date,
        description : req.body.description,
        text : req.body.text
    })

    try{
        const b = blog.save()
        res.send(b)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/editBlog/:id', async (req, res) => {
    console.log(req.params.id)
    try{
        await Blog.deleteOne({_id : req.params.id})
        const blog = new Blog({
            title : req.body.title,
            date : req.body.date,
            description : req.body.description,
            text : req.body.text
        })
        console.log('new blog', blog)
        const b = blog.save()
        res.send(b)
    } catch (e) {
        console.log(e)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const b = await Blog.deleteOne({_id: req.params.id})

        res.send(b)
    } catch (e) {
        console.log(e)
    }
})

module.exports = router