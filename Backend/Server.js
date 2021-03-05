const express = require('express')
const fs = require('fs')
const app = express()

// Middleware

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH")
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next()
})
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server Running!')
})

// Reading Blogs
app.get('/blogs', (req, res) => {
    const blogs = getBlogs()
    res.send(blogs)
})

// Creating Blogs
app.post('/createBlog', (req, res) => {
    const blogs = getBlogs()
    console.log(req)
    const blog = req.body

    blogs.push(blog)

    saveBlog(blogs)
    res.send('create success!')
})

// Updating Blogs
app.patch('/editBlog/:id', (req, res) => {
    const id = req.params.id
    const blog = req.body

    const blogs = getBlogs()
    const updateBlogs = blogs.filter(blog => blog.id != id)

    updateBlogs.push(blog)

    saveBlog(updateBlogs)
    res.send('edit success!')
})

// Deleting Blogs
app.delete('/deleteBlog/:id', (req, res) => {
    const id = req.params.id

    const blogs = getBlogs()

    const filteredBlogs = blogs.filter(blog => blog.id != id)

    saveBlog(filteredBlogs)
    res.send('delete success!')
})

// Functions
const getBlogs = () => {
    const blogs = fs.readFileSync('db.json')
    return JSON.parse(blogs)
}

const saveBlog = (blog) => {
    const blogData = JSON.stringify(blog)
    fs.writeFileSync('db.json', blogData)
}

app.listen(8888, (err) => {
    if (err) console.log(err)
})