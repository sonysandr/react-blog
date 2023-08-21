import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Enter your email</label>
        <input type="text" className="registerInput" placeholder="email" />
        <label>Enter your username</label>
        <input type="text" className="registerInput" placeholder="username" />
        <label>Enter Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="username"
        />
        <button className="registerButton">Register</button>
      </form>

      <button className="loginButton">Login</button>
    </div>
  );
}
