import React, { useEffect, useState } from 'react';
import { createPost, deletePost, getPosts } from '../../store/slices/posts.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.postSlice.posts);

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
      color: "back",
      height: "100vh",
    }}>
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
        onChange={(e) => setImage(e.target.files[0])} value={image}

      />
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
      <div style={{
        width: "80%",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        backgroundColor: "#f8f9fa",
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
              <button style={{
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







      {/* <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
        </ul>
        <button style={{
          width: "80%",
          height: "50px",
          margin: "20px auto",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          backgroundColor: "#28A745",
          color: "white",
          cursor: "pointer",
        }}>Delete Post</button>
        <button style={{
          width: "80%",
          height: "50px",
          margin: "20px auto",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          backgroundColor: "#FFC107",
          color: "white",
          cursor: "pointer",
        }}>View Post</button>
        <button style={{
          width: "80%",
          height: "50px",
          margin: "20px auto",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          backgroundColor: "#17A2B8",
          color: "white",
          cursor: "pointer",
        }}>Like Post</button>
        <button style={{
          width: "80%",
          height: "50px",
          margin: "20px auto",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          backgroundColor: "#6C757D",
          color: "white",
          cursor: "pointer",
        }}>Comment Post</button>
        <button style={{
          width: "80%",
          height: "50px",
          margin: "20px auto",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem", 
          backgroundColor: "#DC3545",
          color: "white",
          cursor: "pointer",  
        }}>Share Post</button>
        <button style={{
          width: "80%",
          height: "50px",
          margin: "20px auto",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          backgroundColor: "#343A40",
          color: "white",
          cursor: "pointer",
        }}>Report Post</button>
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
        }}>Save Post</button>
        <button style={{
          width: "80%",
          height: "50px",
          margin: "20px auto",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          backgroundColor: "#6C757D",
          color: "white",
          cursor: "pointer",
        }}>UnSave Post</button> */}
      {/* </div> */}
    </div>
  )
}   