import userInput from "./userInput.js";
import submitButton from "./submitButton.js";

const navbar = () => {
    return React.createElement('div', { className: "navbar" }, userInput(), submitButton());
}
export default navbar;