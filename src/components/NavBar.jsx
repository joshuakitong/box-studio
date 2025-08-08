import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "BOX84 STUDIO" },
    { path: "/about", label: "ABOUT" },
    { path: "/services", label: "SERVICES" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center space-x-4 md:space-x-16 sm:space-x-8 px-2 md:px-8 sm:px-4 py-2 rounded-full 
                     bg-black/10 backdrop-blur-md border-2 border-white 
                     text-sm md:text-lg sm:text-md font-semibold">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`whitespace-nowrap transition-colors hover:text-white ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
