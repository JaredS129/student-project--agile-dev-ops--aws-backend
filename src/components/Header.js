// import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div>
          <h1 className="header__title">Questionz.io</h1>
          <form>
            <label htmlFor="title"></label>
            <input
              className="header__search"
              type="text"
              id="title"
              required
              value="Search for a question..."
            />
          </form>
        </div>
        <ul>
          <li className="header__nav--link">
            <p>Log In</p>
          </li>
          <li className="header__nav--link grey">
            <p>Dashboard</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
