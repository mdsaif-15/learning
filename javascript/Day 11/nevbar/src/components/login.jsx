const Login = ({ login }) => {
    return (
        <>
            <div className="login">
                {login.map((login) => {
                    return <a key={login} href="#">
                        {login}
                    </a>
                })}
            </div>
        </>);
}
export default Login;