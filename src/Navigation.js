import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Navigation() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact-</Link>
        </div>
    )
}