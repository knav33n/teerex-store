import Loader from "@common/Loader/Loader";
import IconButton from "@components/common/IconButton/IconButton";
import ProductService, { Product } from "@services/productService";
import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import "./ProductsListing.scss";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import ProductList from "./components/ProductList/ProductList";
import ProductSearch from "./components/ProductSearch/ProductSearch";
import { IoMdClose } from "react-icons/io";

const ProductsListing = () => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true)
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const handleMobileFilterToggle = () => {
        setIsMobileFilterOpen(!isMobileFilterOpen);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductService.getAllProducts();
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <Loader />

    return (
        <section className="product-page">
            <div>
                <aside className="filter-wrapper">
                    <ProductFilter products={products} setData={setFilteredProducts} />
                </aside>
            </div>
            <div className="content-wrapper">
                <div>
                    <ProductSearch products={products} setData={setFilteredProducts} />
                    <IconButton icon={CiFilter} ariaLabel="Filters" onClick={handleMobileFilterToggle} className="mobile-only" />
                </div>
                <div>
                    <p>Showing {filteredProducts.length} results</p>
                </div>
                <ProductList products={filteredProducts} />
            </div>
            {isMobileFilterOpen && (
                <aside className="mobile-filter-wrapper">
                    <IconButton icon={IoMdClose} ariaLabel="close filters" onClick={handleMobileFilterToggle} />
                    <ProductFilter products={products} setData={setFilteredProducts} />
                </aside>
            )}
        </section>
    )
}

export default ProductsListing