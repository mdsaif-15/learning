import Logo from "./logo";
import Nevigation from "./nevigations";
import Login from "./login";


const Navbar = () => {
    let logo = "profile";
    let login = ["login", "sign up"];
    let nevigation = "nevigation";
    return (
        <>
            <div className="Navbar">
                <Logo logo={logo}></Logo>
                <Nevigation nevigation={nevigation}></Nevigation>
                <Login login={login} ></Login>
            </div>
        </>
    )
}
export default Navbar;