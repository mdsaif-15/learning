import "./SearchBar.css";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-bar-input"
                placeholder="Search by name or phone..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;