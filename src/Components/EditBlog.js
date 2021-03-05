import {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const EditBlog = (props) => {


    const temp = props.location.state
    const [blog, setBlog] = useState(temp)


    const editBlog = async () => {
        await axios.patch('http://localhost:8888/editBlog/'+blog.id, blog)
            .then(res => console.log(res))
    }

    return(
        <>

            <div className={'container'}>

                <ul className="nav nav-tabs mt-4">
                    <li className="nav-item">
                        <p className="nav-link active" aria-current="page">Write</p>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: '/previewBlog',
                            state: blog,
                        }}>Preview</Link>
                    </li>
                </ul>

                <div className="input-group mt-5">
                    <textarea style={{height: '50px', borderRadius:'10px'}} placeholder={'Title'} className="form-control" aria-label="With textarea"
                              onChange={(e) => {
                                  setBlog({
                                      ...blog,
                                      "title" : e.target.value
                                  })
                              }}
                              value={blog.title}/>
                </div>
                <div className="input-group mt-5">
                    <textarea style={{height: '700px', borderRadius:'10px'}} className="form-control" aria-label="With textarea"
                              onChange={(e) => {
                                  setBlog({
                                      ...blog,
                                      "text" : e.target.value
                                  })
                              }}
                              value={blog.text}/>
                </div>
                <div className={'d-flex justify-content-center mt-5 mb-5'}>
                    <button type="button" className="btn btn-info" onClick={editBlog}>Save Blog</button>
                </div>
            </div>

        </>
    )
}

export default EditBlog