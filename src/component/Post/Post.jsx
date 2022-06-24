// import React from "react";

// const Post = (props) => {
//   return (
//     <div className="post">
//       <div className="img-thumb">
//         <img src="https://placeimg.com/200/150/tech" alt="" />
//       </div>
//       <div className="content">
//         <p className="title" onClick={() => props.goDetail(props.data.id)}>
//           {props.data.title}
//         </p>
//         <p className="desc">{props.data.desc}</p>
//         <p className="body">{props.data.body}</p>
//         <button className="remove" onClick={() => props.remove(props.data.id)}>
//           Remove
//         </button>
//         <button className="update" onClick={() => props.update(props.data)}>
//           Update
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Post;

import React from "react";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="content">
        <p
          className="title"
          onClick={() => navigate(`/detail-post/${props.data.id}`)}
        >
          {props.data.title}
        </p>
        <p className="desc">{props.data.desc}</p>
        <p className="body">{props.data.content}</p>
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
        <button className="update" onClick={() => props.update(props.data)}>
          Update
        </button>
      </div>
      {/* <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="" />
      </div> */}
    </div>
  );
};

export default Post;
