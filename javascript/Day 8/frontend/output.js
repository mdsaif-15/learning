import calculate from "./calculate.js";
const output = () => {
    return React.createElement('div', { className: 'outputDiv' }, calculate()
    )
};
export default output;