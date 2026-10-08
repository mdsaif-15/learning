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
            <Brand />
            <MovieButton />
            <TVshowButton />
            <LightModeButton />
            <SignInButton />
            <SearchSection />
        </div>
    </>)
}
export default HeadSection;