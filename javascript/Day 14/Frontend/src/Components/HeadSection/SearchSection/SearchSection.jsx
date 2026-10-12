import SearchBox from "./SearchBox";
import ShowWiseSearch from "./ShowWiseSearch";
import YearWiseSearch from "./YearWiseSearch";
import "./SearchSection.css"
const SearchSection = () => {
    return (<>
        <div className="search-section">
            <SearchBox />
            <ShowWiseSearch />
            <YearWiseSearch />
        </div>
    </>);
}
export default SearchSection;