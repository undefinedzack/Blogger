import {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import * as Data from '../Database/Data'
import {useParams} from 'react-router-dom'

const BlogDetails = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState()

    useEffect(() => {
        Data.blogs.filter((blog) => {
            if (blog.id === parseInt(id)) {
                setBlog(blog)
            }
        })
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