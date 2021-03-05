import './App.css';
import Home from './Components/Home';
import NavigationBar from "./Components/NavigationBar";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import CreateBlog from "./Components/CreateBlog";
import Footer from "./Components/Footer";
import EditBlog from "./Components/EditBlog";
import PreviewBlog from "./Components/PreviewBlog";


const App = () => {
  return(
    <>

        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/blog/:id'} component={BlogDetails} />
                <Route exact path={'/createBlog'} component={CreateBlog} />
                <Route exact path={'/editBlog/:id'} component={EditBlog} />
                <Route exact path={'/previewBlog'} component={PreviewBlog} />
            </Switch>
            <Footer />
        </Router>
    </>
  )
}

export default App;
