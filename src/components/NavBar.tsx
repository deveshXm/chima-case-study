import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <Link to="/" className="font-extrabold text-2xl">
        VidGen
      </Link>
    </nav>
  );
};

export default Navbar;
