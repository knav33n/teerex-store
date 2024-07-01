import Search from "@common/Search/Search"
import { Product } from "@services/productService";

interface ProductSearchProps {
    products: Product[]
    setData: (data: Product[]) => void
}

const ProductSearch = ({ products, setData }: ProductSearchProps) => {

    const searchProducts = (query: string) => {
        const lowerCaseQuery = query.toLowerCase().trim();
        if (!lowerCaseQuery.length) {
            setData(products);
            return
        }

        const filteredProducts = products.filter(product =>
            Object.values(product).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(lowerCaseQuery)
            )
        );
        setData(filteredProducts);
    };

    return (
        <Search onSearch={searchProducts} />
    )
}

export default ProductSearch