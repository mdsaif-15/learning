import { useState } from "react";

const StudentCart = ({ StudentList = 0, index = 0 }) => {
    const [count, setCount] = useState(StudentList);

    const increment = () => {
        if (count < 25) {
            setCount(count + 5);
        }
    };

    return (
        <div className="MainContener">
            <h1 className="StudentMarks">Student {index + 1} : Marks - {count}</h1>
            <button className="btn" onClick={increment}>Increment</button>
        </div>
    );
};

export default StudentCart;