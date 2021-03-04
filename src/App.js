import './App.css';
import Home from './Components/Home';
import NavigationBar from "./Components/NavigationBar";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import Footer from "./Components/Footer";


const App = () => {
  return(
    <>

        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/blog/:id'} component={BlogDetails} />
            </Switch>
            <Footer />
        </Router>
    </>
  )
}

export default App;
