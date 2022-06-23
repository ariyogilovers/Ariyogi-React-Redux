import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";
class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
  };

  getPostApi = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  handleRemove = (data) => {
    // console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
      //   console.log(result);
      this.getPostApi();
    });
  };

  handleUpdate = (data) => {
    // console.log(data);

    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  };

  postDataToApi = () => {
    axios
      .post("http://localhost:3004/posts", this.state.formBlogPost)
      .then((result) => {
        console.log("resul", result);
        this.getPostApi();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      })
      .catch((err) => {
        console.log("eror", err);
      });
  };

  putDataToApi = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((result) => {
        console.log("resul", result);
        this.getPostApi();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      })
      .catch((err) => {
        console.log("eror", err);
      });
  };

  handleFormChange = (e) => {
    // console.log("form change", e.target);
    // console.log("voalu obj form blogpost", this.state.formBlogPost);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();

    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timeStamp;
    }
    formBlogPostNew[e.target.id] = e.target.value;
    console.log("timeStamp", timeStamp);
    // console.log("ini apa", e.target.id);
    // console.log("formBlogPostNew", formBlogPostNew);
    formBlogPostNew[e.target.id] = e.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      }
      // ,
      // () => {
      //   console.log("formBlogPostNew", formBlogPostNew);
      // }
    );
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToApi();
    } else {
      this.postDataToApi();
    }
  };

  componentDidMount() {
    this.getPostApi();
  }

  render() {
    return (
      <Fragment>
        <p>Halaman Blogpost</p>
        <hr />
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={this.state.formBlogPost.title}
            placeholder="add title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body-content">Blog Content</label>
          <textarea
            name="body-content"
            id="body"
            value={this.state.formBlogPost.body}
            cols="30"
            rows="10"
            placeholder="add body"
            onChange={this.handleFormChange}
          />
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goDetail={this.handleDetail}
            />
          );
        })}
      </Fragment>
    );
  }
}
export default BlogPost;
