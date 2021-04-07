const cubes = require("../config/db.json")
module.exports = (req, res) => {
    res.render("home", {cubes})
}