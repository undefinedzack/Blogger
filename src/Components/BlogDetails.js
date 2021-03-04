import {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import {useParams} from 'react-router-dom'
import axios from "axios";

const BlogDetails = () => {
    const {id} = useParams()

    const [blog, setBlog] = useState()

    useEffect(() => {
        const fetchBlogs = async () => {
            await axios.get('http://localhost:8888/blogs')
                .then(res => res.data.filter((blog) => {
                    if (parseInt(blog.id) === parseInt(id)) {
                        setBlog(blog)
                    }
                }))
        }
        fetchBlogs()

    }, [])

    return(
        <>
            <div className={'container mt-5 mb-5'} style={{'maxWidth': '850px'}}>
                {blog && <ReactMarkdown source={blog.text}/>}
            </div>

        </>
    )
}
export default BlogDetails