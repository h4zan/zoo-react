import { Link } from 'react-router-dom';
import logo from '../assets/DjurParken.jpg';

export const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logoWrapper">
          <img
            src={logo}
            alt="a drawing of mountains and trees"
            className="logo"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/animals">Djuren</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
