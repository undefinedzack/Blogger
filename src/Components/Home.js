import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

import CircularProgress from "@material-ui/core/CircularProgress";

const Head = { fontFamily: "'Inter', sans-serif", fontWeight: "700" };

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      await axios
        .get("https://blogger-undefinedzack.herokuapp.com/blogs")
        .then((res) => setData(res));
      setLoading(false);
    };

    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/*{data && console.log(data)}*/}

      {loading === true ? (
        <>
          <div className={"container d-flex justify-content-center mt-5 mb-5"}>
            <CircularProgress />
          </div>
        </>
      ) : (
        <>
          <div
            className={"container mt-5 mb-5 p-5"}
            style={{ maxWidth: "1000px" }}
          >
            <div className={"row"}>
              <div className={"col-12 col-md-2 d-flex justify-content-center"}>
                <img
                  alt={""}
                  className={"rounded-circle"}
                  src="https://pbs.twimg.com/profile_images/1407267878735286278/ucDdzNwh_400x400.jpg"
                  width="120"
                  height="120"
                />
              </div>
              <div className={"col-12 col-md-8 mt-4"}>
                <div className="d-flex justify-content-center">
                  <p
                    style={{
                      ...Head,
                      fontSize: "24px",
                    }}
                  >
                    Adhney Nawghare
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                  >
                    it's all about practice, neither if nor else.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"container mb-5"} style={{ maxWidth: "850px" }}>
            {data &&
              data.data.map((blog) => {
                return <BlogCard blog={blog} />;
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
