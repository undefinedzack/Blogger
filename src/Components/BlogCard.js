import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className={"row mt-5"}>
        <div className={"col-12 col-md-8"}>
          <Link
            to={{
              pathname: "/blog/" + blog._id,
              state: blog,
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              {blog.title}
            </p>
          </Link>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {blog.date}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              color: "dimgrey",
            }}
          >
            {blog.description}
          </p>
        </div>

        <div className={"col-12 col-md-4"}>
          <img alt={""} src={blog.image} width={"98%"} />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
