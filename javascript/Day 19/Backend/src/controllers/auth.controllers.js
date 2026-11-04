async function register(req, res) {
    const { name } = req.body
    const name2 = req.body.name

    res.status(200).json({
        message: "regester successfull",
        name,
        name2
    })
}
async function login(req, res) {
    res.status(200).json({
        message: "login Successfull",
        name,
        name2
    })
}
module.exports = {
    register,
    login
}