const makeCube = require("../utils/makeCube")

module.exports = (req, res) => {
    if(Object.values(req.body).some(x=> !x)) {
        return
    }
    makeCube(req.body)
    res.redirect("/")
}   