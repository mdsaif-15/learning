import SearchBar from "./SearchBar";
import "./Header.css";

const Header = ({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    onToggleAddContact,
    showAddContact
}) => {
    return (
        <div className="header-container main-div">
            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
            />

            <div className="filter-box">
                <select
                    className="option-button"
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Friends">Friends</option>
                    <option value="Family">Family</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="add-contact-box">
                <button
                    className="add-contact-button"
                    onClick={onToggleAddContact}
                >
                    {showAddContact ? "Cancel" : "+ Add Contact"}
                </button>
            </div>
        </div>
    );
};

export default Header;
