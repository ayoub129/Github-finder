import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ Title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neuteral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {Title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2 ml-auto">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  Title: "Github Finder",
};

export default Navbar;
