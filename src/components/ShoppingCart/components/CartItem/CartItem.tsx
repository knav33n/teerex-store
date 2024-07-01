import Counter from "@common/Counter/Counter"
import { useCart } from "@contexts/Cart/CartContext"
import { Product } from "@services/productService"
import "./CartItem.scss"
import IconButton from "../../../common/IconButton/IconButton"
import { RiDeleteBin6Line } from "react-icons/ri"

const CartItem = ({ item }: { item: Product }) => {
    const { cartDispatch } = useCart();

    const deleteItem = () => {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: item.id })
        // Add toast notification
    }

    return (
        <div className="cart-item">
            <div className="item-details">
                <img src={item.imageURL} alt={item.name} className="product-image" />
                <div className="product-info">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                </div>
            </div>
            <div className="item-actions">
                <Counter product={item} />
                <IconButton
                    onClick={deleteItem}
                    ariaLabel="delete-item"
                    icon={RiDeleteBin6Line}
                />
            </div>
        </div>
    )
}

export default CartItem