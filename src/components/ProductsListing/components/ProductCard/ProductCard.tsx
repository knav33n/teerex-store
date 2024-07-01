import Counter from "@common/Counter/Counter"
import { Product } from "@services/productService"
import "./ProductCard.scss"

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="card">
            <img src={product.imageURL} alt={product.name} />
            <div className="card-footer">
                <div className="card-desc">
                    <span>{product.name}</span>
                    <span>₹{product.price.toFixed(2)}</span>
                </div>
                <Counter product={product} />
            </div>
        </div>
    )
}

export default ProductCard