import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput"  placeholder="email" />
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="username" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="username" />
        <button className="loginButton">Login</button>
      </form>

      <button className="loginRegButton">Register</button>
    </div>
  );
}
