
import "./Navbar.css";
import logoImg from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logoImg} alt="Brand Logo" className="logo-img" />
          <span className="logo-text">CAR RENTAL</span>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>Blogs</li>
          <li>Shop</li>
        </ul>

        <div className="auth-buttons">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;