import "./TaskList.css"
const TaskList = () => {
    const task = [
        "Drink Water", "Quick stretch", "Text a friend", "Unsubscribe"
    ]
    return (<>
        <div className="task-box">
            <div className="title-box">
                <h4>Task-1</h4>
            </div>
            <div className="delete-task">
                <button className="delete-button">delete</button>
            </div>
            <div className="chack-box">
            </div>
        </div>
    </>)
}
export default TaskList;