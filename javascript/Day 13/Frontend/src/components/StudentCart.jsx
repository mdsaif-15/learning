import { useState } from "react";
import "./StudentCart.css"
const StudentCart = ({ StudentList = 0, index = 0 }) => {
    const [count, setCount] = useState(StudentList);

    const increment = () => {
        if (count < 25) {
            setCount(count + 5);
        }
    };

    return (
        <div className="MainContener">
            <h2 className="StudentMarks">Student {index + 1} : Marks - {count}</h2>
            <button className="btn" onClick={increment}>Increment</button>
        </div>
    );
};

export default StudentCart;