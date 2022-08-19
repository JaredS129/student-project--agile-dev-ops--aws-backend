// import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ searchText, setSearchText }) => {
  return (
    <header>
      <div className="header-grid">
        <div>
          <h1 className="header-format">Questionz.io</h1>
          <form>
            <label htmlFor="title"></label>
            <input
              className="search-format"
              type="text"
              id="title"
              value={searchText}
              placeholder="Search here"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
        <ul className="nav-link">
          <li className="login-format">
            <p>Log In</p>
          </li>
          <li className="dashboard-format">
            <p>Dashboard</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
