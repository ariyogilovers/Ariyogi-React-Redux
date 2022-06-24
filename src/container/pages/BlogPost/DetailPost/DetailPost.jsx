// import axios from "axios";
// import React, { Component } from "react";

// class DetailPost extends Component {
//   state = {
//     post: {
//       title: "",
//       body: "",
//     },
//   };

//   componentDidMount() {
//     let id = this.props.match.params.postId;
//     axios.get(`http://localhost:3004/posts/${id}`),
//       (res) => {
//         console.log(res);

//         let post = res.data;

//         this.setState({
//           post: {
//             title: post.title,
//             body: post.body,
//           },
//         });
//       };
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div className="p-detail-post">
//         <p className="detail-title">{post.title}</p>
//         <p className="detail-body">{post.body}</p>
//       </div>
//     );
//   }
// }

// export default DetailPost;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./DetailPost.css";

const DetailPost = (props) => {
  const [post, setPost] = useState({});

  let { postId } = useParams();

  useEffect(() => {
    axios
      .get(`https://test-json-serverq.herokuapp.com/posts/${postId}`)
      .then((res) => setPost(res.data));
  }, []);

  return (
    <div className="p-detail-post">
      <p className="detail-title">{post.title}</p>
      <p className="detail-body">{post.content}</p>
    </div>
  );
};

export default DetailPost;
