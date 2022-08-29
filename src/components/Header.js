import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ searchText, setSearchText }) => {
  return (
    <header>
      <div className="header-grid">
          <Link to="/">
            <h1 className="header-format">Questionz.io</h1>
          </Link>
          <form>
            <label htmlFor="title"></label>
            <input
              className="search-format"
              type="text"
              id="title"
              value={searchText ? searchText : ""}
              placeholder="Search here"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
      </div>
    </header>
  );
};

export default Header;
