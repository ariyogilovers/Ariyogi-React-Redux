//library
import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

//pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";

//css
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent:false
    //   })
    // }, 15000)
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">Life Cycle</Link>
            <Link to="/youtube">Youtube</Link>
            <Link to="/blogpost">Blog Post</Link>
          </div>
          <Routes>
            <Route path="/" element={<BlogPost />} />
            <Route path="/detail-post/:postId" element={<DetailPost />} />
            <Route path="/product" element={<Product />} />
            <Route path="/lifecycle" element={<LifeCycleComp />} />
            <Route path="/youtube" element={<YoutubeCompPage />} />
            <Route path="/blogpost" element={<BlogPost />} />
          </Routes>
        </Fragment>
      </Router>
    );
  }
}

export default Home;
