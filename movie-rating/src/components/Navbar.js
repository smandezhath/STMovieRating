import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") setShowMenu(true);
  }, [showMenu]);

  const navigate = useNavigate();

  const handleClick = (e) => {
    localStorage.removeItem("loggedIn");
    setShowMenu(false);
    navigate('/');
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Movie Rating</h1>
        </Link>
        <nav>
          <div>
            <Link to="/">Home</Link>
            {showMenu ? (
              <>
                <Link to="/movies">Movies</Link>
                <button onClick={handleClick}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
