import Logo from "../../assets/images/coffeecup.png";
import {useState, useEffect} from "react";
import {FaUser, FaSearch, FaBars, FaTimes} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="container mx-auto px-4">
      <nav className="flex flex-col">
        <div className="flex flex-row w-full items-center justify-between navbar gap-4 navbar-expand-lg navbar-light bg-light py-4 ">
          <a
            href="/"
            className="navbar-brand flex items-center justify-center space-x-2"
          >
            <span className="text-gray-800 font-bold main-logo">Perk&Pour</span>
            <span className="text-gray-600 font-semibold sub-logo">Koffee</span>
            <img className=" img-logo" src={Logo} alt="Logo coffee cup" />
          </a>
          <button
            className="block lg:hidden px-2 py-1 text-gray-800 navbar-toggler"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <div className="nnavbar-toggler-icon">
              {menu ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </div>
          </button>

          {/* Desktop Menu */}
          <div
            className="hidden navbar-collapse w-full lg:flex "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav flex space-x-6">
              <li className="nav-item active">
                <a
                  className="nav-link text-gray-800 hover:text-gray-600"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-800 hover:text-gray-600"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-800 hover:text-gray-600"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-800 hover:text-gray-600"
                  href="/coffee"
                >
                  Coffees
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-800 hover:text-gray-600"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-gray-800 hover:text-gray-600"
                  href="/shop"
                >
                  Shop
                </a>
              </li>
            </ul>
            <form className="flex items-center space-x-4 form-inline">
              <a
                href="/login"
                className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 login_bt"
              >
                <FaUser aria-hidden="true" />
                <span>Login</span>
              </a>
              <a href="/search" className="text-gray-800 hover:text-gray-600">
                <FaSearch aria-hidden="true" />
              </a>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="lg:hidden" id="mobile-menu">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li>
                <a
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/coffee"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                >
                  Coffees
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                >
                  Shop
                </a>
              </li>
              <li className="border-t border-gray-200"></li>
              <li>
                <a
                  href="/login"
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                >
                  <FaUser aria-hidden="true" className="mr-2" />
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                >
                  <FaSearch aria-hidden="true" className="mr-2" />
                  Search
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
