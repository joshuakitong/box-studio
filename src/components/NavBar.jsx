import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/services", label: "SERVICES" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 px-4 md:px-8 py-2 rounded-full 
                     bg-black/30 backdrop-blur-sm border border-white 
                     text-xs sm:text-sm md:text-md lg:text-lg font-semibold">
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
