import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const SignInForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
    onClose();
  };

  return (
    <div className="signin-modal">
      <div className="signin-content" style={{marginTop:"80px"}}>
        <button className="close-btn" onClick={onClose}>
          <RiCloseLine />
        </button>
        <h2>Sign In to Zood Mall</h2>
        <div className="signin-form" >
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="form-buttons">
              <button type="submit" style={{backgroundColor:"#4B1B78",color:"white",width:"120px",height:"40px",borderRadius:"5px",fontWeight:"bold"}} >Sign In</button>
              <button type="button" onClick={onClose} style={{backgroundColor:"#FFD200",color:"black",width:"120px",height:"40px",borderRadius:"5px",fontWeight:"bold"}} >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
