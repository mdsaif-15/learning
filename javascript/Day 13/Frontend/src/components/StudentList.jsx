import StudentCart from "./StudentCart";

const StudentList = () => {
    let students = [12, 13, 0, 24, 45, 35, 25, 23, 9];

    return (<>
        <div>
            {students.map((student, index) => {
                return (
                    <StudentCart
                        index={index}
                        key={index}
                        StudentList={student}
                    />
                );
            })}
        </div>
    </>);
}
export default StudentList;
