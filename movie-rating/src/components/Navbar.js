import {Link} from 'react-router-dom';
const NavBar = () => {
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
                <Link to="/movies">Movies</Link>
              </div>
            </nav>
          </div>
        </header>
      )
}

export default NavBar;