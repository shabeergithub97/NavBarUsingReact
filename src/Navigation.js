import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Navigation() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Search Products</Link>
            <Link to="/products">Products</Link>
            <Link to="/Cart">Cart</Link>
        </div>
    )
}