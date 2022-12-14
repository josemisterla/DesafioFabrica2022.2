import { Link, Outlet } from "react-router-dom";
import './style.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/animal">Animal</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;