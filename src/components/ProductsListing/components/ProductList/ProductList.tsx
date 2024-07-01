import { Product } from "@services/productService"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductList.scss"

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="product-grid">
            {products.map(product =>
                <ProductCard
                    key={product.id}
                    id={product.id}
                    product={product}
                />)}
        </div>
    )
}

export default ProductList