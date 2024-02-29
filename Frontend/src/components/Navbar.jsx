import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left-nav">
          <div className="logo">
           <img src="../../public/Logo.png" alt="" />
          </div>
        </div>
        <div className="right-nav">
          <Link to="/" className="home" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/" className="home" style={{ textDecoration: "none" }}>
            Home
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
