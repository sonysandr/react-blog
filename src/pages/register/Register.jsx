import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="email" />
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="username" />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="password"
        />
        <button className="registerButton">Register</button>
      </form>

      <button className="loginButton">
        <Link className="link" to='/login'>Login</Link>
      </button>
    </div>
  );
}
