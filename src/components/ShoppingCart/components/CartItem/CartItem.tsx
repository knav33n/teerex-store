import Counter from "@common/Counter/Counter"
import IconButton from "@common/IconButton/IconButton"
import { useCart } from "@contexts/Cart/CartContext"
import { CartItem as CartItemType } from '@contexts/Cart/CartTypes'
import { RiDeleteBin6Line } from "react-icons/ri"
import "./CartItem.scss"

const CartItem = ({ item }: { item: CartItemType }) => {
    const { cartDispatch } = useCart();

    const deleteItem = () => {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: item.id })
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