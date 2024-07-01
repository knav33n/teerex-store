import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import IconButton from '../IconButton/IconButton';
import './Search.scss';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(searchQuery);
        }
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    }

    return (
        <div className="search-container">
            <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <IconButton
                icon={CiSearch}
                onClick={handleSearch}
                ariaLabel="search"
                className="search-button-container"
            />
        </div>
    );
};

export default Search;
