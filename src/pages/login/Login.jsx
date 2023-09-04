import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="username" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="password" />
        <button className="loginButton">Login</button>
      </form>

      <button className="loginRegButton">
        <Link className="link"  to='/register'>
          Register
        </Link>
      </button>
    </div>
  );
}
