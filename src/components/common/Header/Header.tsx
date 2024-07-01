import { useCart } from "@contexts/Cart/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import "./Header.scss";

const Header = () => {
    const { cartState } = useCart()
    const handleCartClick = () => {

    }

    return (
        <header className="header">
            <div className="header-content">
                <div className="brand">
                    <Link to="/" className="brand-text">TeeRex Store</Link>
                </div>
                <div className="header-links">
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/cart" className="cart-button">
                        <IconButton
                            icon={FiShoppingCart}
                            ariaLabel="Cart"
                            onClick={handleCartClick}
                        />
                        <span className="cart-count">{cartState.cartItems.length}</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header