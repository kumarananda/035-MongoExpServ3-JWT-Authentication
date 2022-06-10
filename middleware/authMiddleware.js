
const authcheck = (req, res, next)=> {
    console.log("User is okay");
    next();
}
module.exports = {
    authcheck
}