import ReactMarkdown from 'react-markdown'
import {Link} from "react-router-dom";

const PreviewBlog = (props) => {

    const blog = props.location.state

    return(
        <>
            <div className={'container'}>

                <ul className="nav nav-tabs mt-4">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to={{
                            pathname: '/createBlog',
                            state: blog
                        }}>Write</Link>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link active">Preview</p>
                    </li>

                </ul>
                <h1 className={'mt-5'}>{blog.title}</h1>
                <hr />
                <ReactMarkdown source={blog.text}/>
                {console.log('preview',blog)}
            </div>
        </>
    )
}

export default PreviewBlog