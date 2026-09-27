import "./header.css";

import Login from "./login";
import Logo from "./logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <>
            <div className="MainNavBar">
                <Logo />
                <Navigation />
                <Login />
            </div>
        </>
    )
}
export default Header;