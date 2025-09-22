import React, { useEffect, useState } from 'react';
import { createPost, deletePost, getPosts } from '../../store/slices/posts.slice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../../components/modal/Modal";
import { Link } from 'react-router';

export default function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [post, setpost] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.postSlice.posts);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(post) {
    setpost(post);
    setIsOpen(true);
  }

  const onClickHandler = () => {
    if (title === "" || content === "") {
      alert("Please fill all the fields");
      return;
    }
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Image:", image);
    let newPost = {
      title: title,
      content: content,
      createAt: new Date().toISOString(),
    }
    dispatch(createPost(newPost));
  }

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const onClickDeleteHandler = (id) => {
    console.log("Delete Post with id:", id);
    confirm("Are you sure you want to delete this post?") && dispatch(deletePost(id));
  }
  return (
    <div style={{
      backgroundColor: "white",
      color: "black",
      height: "100vh",
    }}>

      {/* Create Post Link */}
      <Link to="/createPost" style={{
        textDecoration: "none",
        color: "black",
        fontSize: "1.5rem",
        marginLeft: "20px",
        marginTop: "20px",
        display: "inline-block"
      }}>Create Post</Link>
      {/* {List of Posts} */}
      <div style={{
        width: "80%",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        backgroundColor: "#eeeeeeff",
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}>Posts list</h2>
        <div>
          {posts.map((post) => (
            <div key={post.id} style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "20px",
            }}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.createAt}</p>

              <button onClick={() => onClickDeleteHandler(post.id)} style={{
                height: "50px",
                // margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                backgroundColor: "#DC3545",
                color: "white",
                cursor: "pointer",
              }}
              >Delete</button>
              <button onClick={() => openModal(post)}
                style={{
                  height: "50px",
                  // margin: "20px auto",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  backgroundColor: "#08a010ff",
                  color: "white",
                  cursor: "pointer",
                }}
              >Update</button>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        post={post}
      />
    </div>
  )
}   