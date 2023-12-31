import { useContext } from "react";
import "./navbar.css";
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">StayInn</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">REGISTER</button>
              <button className="navButton">LOGIN</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
