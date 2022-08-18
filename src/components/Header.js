import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Questionz.io</Link>
        <form>
          <label htmlFor="title">Search for a question...</label>
          <input type="text" id="title" required />
        </form>
        <ul>
          <li>
            <Link to="/">Log In</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
