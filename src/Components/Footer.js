const Footer = () => {
  const para = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: "400",
    fontSize: "14px",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="container d-flex justify-content-center"
          style={{ maxWidth: "30%", height: "50px" }}
        >
          <p className={"mt-3 navbar-brand"} style={para}>
            <i className="far fa-copyright" />
          </p>
          <p className={"mt-3 navbar-brand"} style={para}>
            2021
          </p>
          <p className={"mt-3 navbar-brand"} style={para}>
            Adhney Blog's
          </p>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="container justify-content-center"
          style={{ maxWidth: "30%", height: "50px" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            Made with <i className="fas fa-heart" style={{ color: "red" }} /> by{" "}
            <b style={{ fontSize: "16px" }}>
              <a
                href={"adhney.tech"}
                style={{ textDecoration: "none", color: "#3e3b3b" }}
              >
                {" "}
                @undefinedzack
              </a>
            </b>{" "}
          </p>
        </div>
      </nav>
    </>
  );
};

export default Footer;
