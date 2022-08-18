// import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1 className="header__title">Questionz.io</h1>
        <form>
          <label htmlFor="title" className="header__search">
            Search for a question...
          </label>
          <input type="text" id="title" required />
        </form>
        <ul>
          <li className="header__nav--link">
            <p>Log In</p>
          </li>
          <li className="header__nav--link">
            <p>Dashboard</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
