async function register(res,req){
    const{name} = req.body;
    const name2 = req.body.name;

    res.status(200).json({
        message:"regester successfull",
        name,
        name2
    })
}
async function login(res,req){
    res.status(200).json({
        massage:"login successfull",
        name,
        nmae2
    })
}
module.exports = {
    register,
    login
}