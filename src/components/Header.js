// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Questionz.io</h1>
        <form>
          <label htmlFor="title">Search for a question...</label>
          <input type="text" id="title" required />
        </form>
        <ul>
          <li>
            <p>Log In</p>
          </li>
          <li>
            <p>Dashboard</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
