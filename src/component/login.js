import React from "react";
import "../images/logincss.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center">Login Form</h2>
        <div className="mainBox">
          <form>
            <div className="box">
              <label htmlFor="username"><p className="text">Username</p></label>
              <input type="email" name="username" style={{ width: "50vh" }} />
            </div>
            <div className="box">
              <label htmlFor="password"><p className="text">Password</p></label>
              <input type="password" name="password" style={{ width: "50vh" }} />
            </div> 
            <div className="box">
            <div className="btn btn-primary btnSize">Login</div>
            </div>
            <div className="box">
                <p className="text"><Link to='/register'>If not register click here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
