import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>My Website</h2>
            <nav className="font-bold">
               <Link to="/">Home</Link>
               <Link className="ml-4" to="/about">About</Link>
               <Link className="ml-4" to="/contact">Contact</Link>
               <Link className="ml-4" to="/users"> Users</Link>
            </nav>
        </div>
    );
};

export default Header; 