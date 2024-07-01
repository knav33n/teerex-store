import { useState } from 'react';
import { Product } from '@services/productService';
import './ProductFilter.scss'; // Import CSS for styling

interface ProductFilterProps {
    products: Product[]
    setData: (data: Product[]) => void;
}

interface Filters {
    gender?: string[];
    color?: string[];
    priceRange?: string[];
    type?: string[];
}

const Checkbox = ({ checked, onChange, label, filterType }) => <label>
    <input
        type="checkbox"
        value={label.toLowerCase()}
        checked={checked}
        onChange={(e) => onChange(filterType, label.toLowerCase(), e.target.checked)}
    />
    {label}
</label>

const ProductFilter = ({ products, setData }: ProductFilterProps) => {
    const [filters, setFilters] = useState<Filters>({
        gender: [],
        color: [],
        priceRange: [],
        type: [],
    });

    const handleCheckboxChange = (
        key: keyof Filters,
        value: string,
        isChecked: boolean
    ) => {
        const updatedFilters = { ...filters };
        if (isChecked) {
            updatedFilters[key] = [...updatedFilters[key]!, value];
        } else {
            updatedFilters[key] = updatedFilters[key]!.filter(item => item !== value);
        }
        setFilters(updatedFilters);
        handleFilterChange(updatedFilters);
    };

    const handleFilterChange = (filters: Filters) => {
        let filtered = [...products];

        if (filters.gender && filters.gender.length > 0) {
            filtered = filtered.filter(product => filters.gender?.includes(product.gender.toLowerCase()));
        }

        if (filters.color && filters.color.length > 0) {
            filtered = filtered.filter(product => filters.color?.includes(product.color.toLowerCase()));
        }

        if (filters.priceRange && filters.priceRange.length > 0) {
            filtered = filtered.filter(product => {
                const price = product.price;
                return filters.priceRange?.some(range => {
                    if (range === ">450") {
                        return price > 450;
                    } else {
                        const [min, max] = range.split('-').map(Number);
                        return price > min && price <= max;
                    }
                });
            });
        }

        if (filters.type && filters.type.length > 0) {
            filtered = filtered.filter(product => filters.type.includes(product.type.toLowerCase()));
        }

        setData(filtered);
    };

    return (
        <div className="filter-panel">
            <h2>Filters</h2>
            <div className="filter-section">
                <h3>Gender:</h3>
                {["Men", "Women"].map(gender =>
                    <Checkbox
                        key={gender}
                        checked={filters.gender?.includes(gender.toLowerCase())}
                        onChange={handleCheckboxChange}
                        label={gender}
                        filterType="gender"
                    />)}
            </div>
            <div className="filter-section">
                <h3>Colour:</h3>
                {["Red", "Blue", "Green", "Black", "Yellow", "Pink", "Grey", "Purple", "White"].map(color =>
                    <Checkbox
                        key={color}
                        checked={filters.color?.includes(color.toLowerCase())}
                        onChange={handleCheckboxChange}
                        label={color}
                        filterType="color"
                    />)}
            </div>
            <div className="filter-section">
                <h3>Price Range:</h3>
                {["0-250", "250-450", ">450"].map(priceRange =>
                    <Checkbox
                        key={priceRange}
                        checked={filters.priceRange?.includes(priceRange.toLowerCase())}
                        onChange={handleCheckboxChange}
                        label={priceRange}
                        filterType="priceRange"
                    />)}
            </div>
            <div className="filter-section">
                <h3>Type:</h3>
                {["Polo", "Hoodie", "Basic"].map(type =>
                    <Checkbox
                        key={type}
                        checked={filters.type?.includes(type.toLowerCase())}
                        onChange={handleCheckboxChange}
                        label={type}
                        filterType="type"
                    />)}
            </div>
        </div>
    );
};

export default ProductFilter;
