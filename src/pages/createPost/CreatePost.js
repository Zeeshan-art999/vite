import React, { useState } from 'react';
import { createPost } from '../../store/slices/posts.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

export default function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.postSlice.posts);
  const navigation = useNavigate();;

  const goBack = () => {
    navigation("/posts");
  }
  const onClickHandler = async () => {
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
      imageUrl: image,
      createAt: new Date().toISOString(),
    }
    await dispatch(createPost(newPost));
    goBack();
  }

  const onChangeImageHandler = async (e) => {
    console.log("Image:", e.target.files[0]);
    //Upload image to cloudinary

    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset","todo-app");
      const response = await fetch("https://api.cloudinary.com/v1_1/dw8pfjnjp/image/upload", {
        method: "POST",
        body: formData
      })
      const data = await response.json();
     console.log("Image URL:", data.secure_url);
      setImage(data.secure_url);
      console.log("Image uploaded successfully");

    } catch (error) {
      console.log("Error uploading image:", error);
    }
  }

  return (
    <div style={{
      backgroundColor: "white",
      color: "back",
      height: "100vh",
    }}>

      <Link to="/posts" style={{
        textDecoration: "none",
        color: "black",
        fontSize: "1.5rem",
        marginLeft: "20px",
        marginTop: "20px",
        display: "inline-block"
      }}>Back</Link>

      <h1 style={{
        textAlign: "center",
        marginTop: "20px",
        fontSize: "2rem",
        fontWeight: "bold",
      }}>Create Posts</h1>
      <input type="text" placeholder="Title" style={{
        width: "80%",
        height: "50px",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "1rem",
      }}
        onChange={(e) => setTitle(e.target.value)} value={title} />
      <textarea placeholder="Content" style={{
        width: "80%",
        height: "150px",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "1rem",
      }}
        onChange={(e) => setContent(e.target.value)} value={content}
      ></textarea>
      <input type="file" style={{
        width: "80%",
        height: "50px",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "1rem",
      }}
        onChange={(e) => onChangeImageHandler(e)} />
      <button style={{
        width: "80%",
        height: "50px",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        backgroundColor: "#007BFF",
        color: "white",
        cursor: "pointer",
      }}
        onClick={onClickHandler}
      >Create Post</button>

    </div>
  )
}   