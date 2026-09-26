import Logo from "./logo";
import Nevigation from "./nevigations";
import Login from "./login";


const Navbar = () => {
    let logo = "profile";
    let login = ["login","sign up"];
    let nevigation = "nevigation";
    return (
        <>
            <div className="Navbar">
                <Logo></Logo>
                <Nevigation></Nevigation>
                <Login></Login>
            </div>
        </>
    )
}
export default Navbar;