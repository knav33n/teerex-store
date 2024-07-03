import Button from '@common/Button/Button';
import { useCart } from '@contexts/Cart/CartContext';
import { Product } from '@services/productService';
import { useEffect, useState } from 'react';
import { CartItem as CartItemType } from '@contexts/Cart/CartTypes'
import './Counter.scss';

interface CounterProps {
    product: Product | CartItemType
}

const Counter = ({ product }: CounterProps) => {
    const { cartDispatch } = useCart();
    const [quantity, setQuantity] = useState(product.buy_quantity);

    const addToCart = () => {
        if (quantity! + 1 <= product.quantity) {
            const newQuantity = quantity! + 1;
            cartDispatch({ type: 'ADD_TO_CART', payload: { ...product, buy_quantity: newQuantity } });
            setQuantity(newQuantity);
        } else {
            alert("Sorry, we are out of that item.")
        }
    };

    const removeFromCart = () => {
        const newQuantity = quantity! - 1;
        if (newQuantity >= 0) {
            if (newQuantity === 0) {
                cartDispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
            } else {
                cartDispatch({ type: 'ADD_TO_CART', payload: { ...product, buy_quantity: newQuantity } });
            }
            setQuantity(newQuantity);
        }
    };

    useEffect(() => {
        setQuantity(product.buy_quantity || 0)
    }, []);

    if (!quantity || quantity === 0) {
        return <Button onClick={addToCart}>Add to cart</Button>
    }

    return (
        <div className="counter">
            <button onClick={removeFromCart}>-</button>
            <span>{quantity}</span>
            <button onClick={addToCart}>+</button>
        </div>
    );
};

export default Counter;
