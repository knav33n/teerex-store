import { useCart } from '@contexts/Cart/CartContext'
import { Product } from '@services/productService'
import CartItem from './components/CartItem/CartItem'
import "./ShoppingCart.scss"

const ShoppingCart = () => {
    const { cartState: { cartItems } } = useCart()

    const total = cartItems.reduce((accumulator: number, currentItem: Product) => {
        return accumulator + (currentItem.price * currentItem.buy_quantity);
    }, 0);


    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item: Product) => (<CartItem key={item.id} item={item} />))}

                        </div>
                        <div className="total">
                            <h3>Total: ₹{total}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ShoppingCart