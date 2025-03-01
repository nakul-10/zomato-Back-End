import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/login", { email, password });
      localStorage.setItem("username", res.data.username);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (err) {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <h1 className="auth-title">Welcome Back</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>
            <button type="submit" className="auth-button">Log In</button>
          </form>
          <div className="auth-footer">
            Don't have an account? <Link to="/register" className="auth-link">Register now</Link>
          </div>
        </div>
        <div className="auth-info">
          <h2>Welcome to Our App</h2>
          <p>Log in to access your account and continue your journey with us.</p>
          <ul className="feature-list">
            <li>Access your saved data</li>
            <li>Continue your projects</li>
            <li>Connect with your network</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;