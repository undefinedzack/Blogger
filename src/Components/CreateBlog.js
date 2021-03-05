import {useState, useEffect} from 'react'
import axios from "axios";

const CreateBlog = () => {

    const [obj, setObj] = useState({
        "id" : Date.now(),
        "title" : "",
        "date" : new Date().toDateString(),
        "description" : "this is a description",
        "text" : ""
    })

    const createBlog = () => {
        axios.post('http://localhost:8888/createBlog',obj)
            .then(res => console.log(res))
    }

    return(
        <>
            <div className={'container'}>
                <div className="input-group mt-5">
                    {/*<span className="input-group-text">Title</span>*/}
                    <textarea style={{height: '50px'}} placeholder={'Title'} className="form-control" aria-label="With textarea"
                              onChange={(e) => {
                                  setObj({
                                      ...obj,
                                      "title" : e.target.value
                                  })
                              }}
                              value={obj.title}/>
                </div>
                <div className="input-group mt-5">
                    <textarea style={{height: '500px'}} className="form-control" aria-label="With textarea"
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