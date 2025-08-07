import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-center space-x-8 py-4 text-lg font-semibold">
        <li>
          <Link to="/" className="hover:text-blue-500">
            BOX84 STUDIO
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-500">
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}