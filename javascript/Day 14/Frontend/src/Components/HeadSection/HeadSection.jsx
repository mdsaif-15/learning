import "./HeadSection.css"
import LightModeButton from "./LightModeButton.jsx"
import Brand from "./Brand.jsx"
import MovieButton from "./MovieButton.jsx"
import TVshowButton from "./TVshowButton.jsx"
import SignInButton from "./SignInButton.jsx"
import SearchSection from "./SearchSection/SearchSection.jsx"
const HeadSection = () => {
    return (<>
        <div className="head-section">
            <div className="name-section">
                <Brand />
                <MovieButton />
                <TVshowButton />
                <LightModeButton />
                <SignInButton />
            </div>
            <div className="search-outerdiv">
                <SearchSection />
            </div>
        </div>
    </>)
}
export default HeadSection;