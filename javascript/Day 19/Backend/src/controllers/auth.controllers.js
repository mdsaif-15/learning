async function register(res, req) {
    const { name } = res.body;
    const name2 = res.body.name;
    res.status(200).json({
        message: "register successfull",
        name,
        name2
    });
}
async function login(res, req) {
    res.status(200).json({
        message: "login successfull",
        name,
        name2,
    });
}
module.exports = {
    register,
    login
}