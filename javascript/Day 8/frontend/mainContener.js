import navbar from "./navbar.js";
import output from "./output.js";

const mainContener = () => {
    return React.createElement("div", { className: "mainContener" }, navbar(), output())
}
export default mainContener