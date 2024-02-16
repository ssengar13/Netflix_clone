import { Link } from "react-router-dom";

const Header = () => {

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
             <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/movies">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/tv-shows">TV Shows</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/tv-shows">News & popular</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/tv-shows">My List</Link>
                </li>
              </ul>
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <img className="user_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;