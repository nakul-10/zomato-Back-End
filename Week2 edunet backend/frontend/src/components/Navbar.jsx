import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="simple-navbar">
      <div className="navbar-brand">
        <Link to="/">Food App</Link>
      </div>
      
      <div className="navbar-menu">
        {isLoggedIn ? (
          <>
            <Link to="/home" className="nav-link">Home</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;