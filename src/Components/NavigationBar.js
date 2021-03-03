const NavigationBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
                <div className="container" style={{'maxWidth': '90%'}}>
                    <a className="navbar-brand mt-3" href="#"><h3 style={{'fontFamily' : "'Inter', sans-serif", fontWeight : '700'}}>Adhney Blog's</h3></a>
                    <a className="navbar-brand" href="#">
                        <img className={'rounded-circle'} src="https://pbs.twimg.com/profile_images/1269507968476864513/zlWyVOmU_400x400.jpg" width="40" height="40" />
                    </a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
                <div className="container" style={{'maxWidth': '88%'}}>
                    <ul className={'navbar-nav'}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><h6>HOME</h6></a>
                        </li>
                        <li className={'nav-item'}>
                            <a className="nav-link active" aria-current="page" href="#"><h6>BADGES</h6></a>
                        </li>
                    </ul>

                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-decoration-none active icon-color"
                               href="https://twitter.com/undefinedzack"><span
                                className="fab fa-twitter fa-lg icon-color"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-decoration-none icon-color"
                               href="https://www.instagram.com/undefinedzack/"><span
                                className="fab fa-instagram fa-lg icon-color"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-decoration-none icon-color"
                               href="https://github.com/undefinedzack"><span
                                className="fab fa-github fa-lg icon-color"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-decoration-none icon-color"
                               href="https://linkedin.com/in/adhney"><span
                                className="fab fa-linkedin-in fa-lg icon-color"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-decoration-none icon-color"
                               href="https://www.facebook.com/adhney.nawghare"><span
                                className="fab fa-facebook-f fa-lg icon-color"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar