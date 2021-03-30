import {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const CreateBlog = (props) => {

    const [obj, setObj] = useState({
        "title" : "",
        "date" : new Date().toDateString(),
        "description" : "",
        "text" : ""
    })

    useEffect(() => {
        const blog = props.location.state

        if (blog) {
            setObj(blog)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const createBlog = () => {
        axios.post('http://localhost:8888/blogs/',obj)
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
                            state: obj,
                        }}>Preview</Link>
                    </li>
                </ul>

                <div className="input-group mt-5">
                    <textarea style={{height: '50px', borderRadius:'10px'}} placeholder={'Title'} className="form-control" aria-label="With textarea"
                              onChange={(e) => {
                                  setObj({
                                      ...obj,
                                      "title" : e.target.value
                                  })
                              }}
                              value={obj.title}/>
                </div>

                <div className="input-group mt-5">
                    <textarea style={{height: '700px', borderRadius:'10px'}} className="form-control" aria-label="With textarea"
                              onChange={(e) => {
                                  setObj({
                                      ...obj,
                                      "text" : e.target.value
                                  })
                              }}
                              value={obj.text}/>
                </div>
                <div className={'d-flex justify-content-center mt-5 mb-5'}>
                    <button type="button" className="btn btn-info" onClick={createBlog}>Create Blog</button>
                </div>
            </div>


            {console.log(obj)}
        </>
    )
}

export default CreateBlog