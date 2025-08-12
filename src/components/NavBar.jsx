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
      <ul
        className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 px-4 md:px-8 py-2 rounded-full
                   bg-black/80 backdrop-blur-sm border border-white
                   text-xs sm:text-sm md:text-md lg:text-lg"
      >
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={(e) => {
                  if (isActive) e.preventDefault();
                }}
                className={`whitespace-nowrap transition-colors hover:text-white ${
                  isActive ? "text-white cursor-default" : "text-gray-300"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
