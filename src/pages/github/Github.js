import axios from "axios";
import React, { useState } from "react";

export default function Github() {
    const [search, setSearch] = React.useState('')
    const [user, setUser] = useState({});
    const fetchGithub = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${search}`);
            console.log(response.data);
            setUser(response.data);
            setSearch("");
        }
        catch (error) {
            console.log(error);
        }
    }
    const onClickHandler = () => {
        if (search === "") {
            alert("Please enter a username")
        } else {
            fetchGithub();
        }
    }
    return (
        <div>
            <h1 style={{ color: "wheat" }}>Github User Search App</h1>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for a user " style={{ color: 'white', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <button onClick={onClickHandler} style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', background: 'blue', color: 'white' }}>Seacrh</button>
            <div style={{ marginTop: '20px' }}>
                <h2 style={{ color: "wheat" }}>User Details</h2>
                <img src={user.avatar_url} alt="User Avatar" style={{ width: '100px',height:'100px',borderRadius:'50%' }} />
                <p style={{ color: "wheat" }}>Name : {user.name}</p>
                <p style={{ color: "wheat" }}>Bio :{user.bio}</p>
                <p style={{ color: "wheat" }}>Followers:{user.Followers}</p>
                <p style={{ color: "wheat" }}>Following:{user.Following}</p>
                <p style={{ color: "wheat" }}>Public Repo :{user.repo}</p>
                <p style={{ color: "wheat" }}>Location : {user.location}</p>
                <p style={{ color: "wheat" }}>Company :{user.company}</p>
            </div>
        </div>
    )
}