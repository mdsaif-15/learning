import StudentCart from "./StudentCart";

const StudentList = () => {
    let students = [12, 13, 50, 24, 45, 35, 25];

    return (<>
        <div>
            {students.map((student, index) => {
                <StudentCart
                    key={index}
                    StudentList={student}
                />
            })}
        </div>
    </>);
}
export default StudentList;