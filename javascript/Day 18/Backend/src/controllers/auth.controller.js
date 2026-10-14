async function register(req, res) {
    const { name } = req.body;
    const name2 = req.body.name;

    res.status(200).json({
        message: "Registration Successful",
        name,
        name2,
    });
}

async function login(req, res) {
    res.status(200).json({
        message: "Login Successful",
    });
}

module.exports = {
    register,
    login
}