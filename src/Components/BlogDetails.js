import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      await axios
        .get("https://blogger-undefinedzack.herokuapp.com/blogs")
        .then((res) =>
          res.data.filter((blog) => {
            if (parseInt(blog._id) === parseInt(id)) {
              setBlog(blog);
            }
            return <></>;
          })
        );
      setLoading(false);
    };
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog]);

  const deleteBlog = () => {
    axios
      .delete("https://blogger-undefinedzack.herokuapp.com/blogs/" + blog._id)
      .then((res) => console.log(res));
  };

  return (
    <>
      {loading === true ? (
        <>
          <div className={"container d-flex justify-content-center mt-5 mb-5"}>
            <CircularProgress />
          </div>
        </>
      ) : (
        <>
          {blog && (
            <div
              className={"container mt-5 mb-5"}
              style={{ maxWidth: "850px" }}
            >
              <hr />
              <div className={"row text-center mt-2 mb-2 no-gutter"}>
                <div className={"col-1"}>
                  <img
                    alt={""}
                    className={"rounded-circle"}
                    src="https://pbs.twimg.com/profile_images/1407267878735286278/ucDdzNwh_400x400.jpg"
                    width="70"
                    height="70"
                  />
                </div>
                <div className={"col-4"}>
                  <p
                    className={"mt-1"}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    Adhney Nawghare
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Published on {blog.date}
                  </p>
                </div>
                <div className={"col-2 ms-auto"}>
                  <Link
                    to={{
                      pathname: "/editBlog/" + blog._id,
                      state: blog,
                    }}
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    <i className="far fa-edit" />
                    <p
                      className={"mt-1"}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      Edit
                    </p>
                  </Link>
                </div>
                <div className={"col-2"}>
                  <div
                    onClick={() => deleteBlog()}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="far fa-trash-alt" />
                    <p
                      className={"mt-1"}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      Delete
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <ReactMarkdown source={blog.text} />
            </div>
          )}
        </>
      )}
    </>
  );
};
export default BlogDetails;
