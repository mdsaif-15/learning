import LightModeButton from "./LightModeButton.jsx"
import Brand from "./Brand.jsx"
import MovieButton from "./MovieButton.jsx"
import TVshowButton from "./TVshowButton.jsx"
import SignInButton from "./SignInButton.jsx"
const HeadSection = () => {
    return (<>
        <div className="head-section">
            <Brand />
            <MovieButton />
            <TVshowButton />
            <LightModeButton />
            <SignInButton />
        </div>
    </>)
}
export default HeadSection;