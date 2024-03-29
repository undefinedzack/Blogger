import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavigationBar = () => {
  const url = "https://blogger-undefinedzack.vercel.app/";

  const [reRender, setReRender] = useState(false);
  const [homeWeight, setHomeWeight] = useState("500");
  const [createWeight, setCreateWeight] = useState("500");

  useEffect(() => {
    const path = window.location.href;
    if (path === url) {
      setHomeWeight("700");
      setCreateWeight("500");
    } else {
      setCreateWeight("700");
      setHomeWeight("500");
    }
  }, [reRender]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
        <div className="container" style={{ maxWidth: "90%" }}>
          <Link className="navbar-brand mt-3" to={"/"}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              Adhney Blog's
            </p>
          </Link>
          <a className="navbar-brand" href="https://adhney.tech/">
            <img
              alt={""}
              className={"rounded-circle"}
              src="https://pbs.twimg.com/profile_images/1407267878735286278/ucDdzNwh_400x400.jpg"
              width="40"
              height="40"
            />
          </a>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
        <div className="container" style={{ maxWidth: "88%" }}>
          <ul className={"navbar-nav"}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <p
                  onClick={() => setReRender(!reRender)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: homeWeight,
                    fontSize: "16px",
                  }}
                >
                  HOME
                </p>
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/createBlog"}
              >
                <p
                  onClick={() => setReRender(!reRender)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: createWeight,
                    fontSize: "16px",
                  }}
                >
                  CREATE
                </p>
              </Link>
            </li>
          </ul>

          <ul className="nav">
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none active icon-color"
                href="https://twitter.com/undefinedzack"
              >
                <span className="fab fa-twitter fa-lg icon-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none icon-color"
                href="https://www.instagram.com/undefinedzack/"
              >
                <span className="fab fa-instagram fa-lg icon-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none icon-color"
                href="https://github.com/undefinedzack"
              >
                <span className="fab fa-github fa-lg icon-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none icon-color"
                href="https://linkedin.com/in/adhney"
              >
                <span className="fab fa-linkedin-in fa-lg icon-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none icon-color"
                href="https://www.facebook.com/adhney.nawghare"
              >
                <span className="fab fa-facebook-f fa-lg icon-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none icon-color"
                href="https://adhney.tech"
              >
                <span className="fas fa-globe-asia fa-lg icon-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none icon-color"
                href="https://dev.to/undefinedzack"
              >
                <span className="fab fa-dev fa-lg icon-color" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
