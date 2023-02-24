import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("loggedIn") == "true") setShowMenu(true);
  }, []);

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Movie Rating</h1>
        </Link>
        <nav>
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            {showMenu && (
              <>
                <Link to="/movies">Movies</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
