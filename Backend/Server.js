const express = require('express')
const fs = require('fs')
const app = express()

// Middleware

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
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

// Functions
const getBlogs = () => {
    const blogs = fs.readFileSync('db.json')
    return JSON.parse(blogs)
}

app.listen(8888, (err) => {
    if (err) console.log(err)
})