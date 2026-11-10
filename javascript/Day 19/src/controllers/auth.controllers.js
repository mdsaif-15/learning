async function register(req,res){
    const {name} = res.body;
    const name2 = res.body.name

    res.status(200).json({
        message:"register successfully",
        name,
        name2
    })
}
async function login(req,res){
    res.status(200).json({
        message:"login successfully",
        name,
        name2
    })
}
module.exports = {register,login}