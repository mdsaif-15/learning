import "./Todopage.css"
const TodoList = () => {
    return (<>
        <h1>Todo List</h1>
        <div>
            <div className="navbar">
                <div className="filter-box">
                    <label></label>
                    <select className="option-button">
                        <option className="options">All</option>
                        <option className="options">Chacked</option>
                        <option className="options">Unchacked</option>
                    </select>
                </div>
                <div className="add-task">
                    <button className="add-button">
                        Add
                    </button>
                </div>
            </div>
        </div>

    </>)
}
export default TodoList;