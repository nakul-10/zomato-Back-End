import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUsername(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="simple-home">
      <div className="simple-container">
        <h1>Welcome, {username}!</h1>
        <p>You've successfully logged in to your account.</p>
        
        <div className="actions">
          <button className="primary-btn">Dashboard</button>
          {/* <button className="primary-btn">Profile</button> */}
          {/* <button className="logout-btn" onClick={handleLogout}>Logout</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;