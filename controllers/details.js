const cubes = require("../config/db.json")
module.exports = (req, res) => {
    const id = req.params.id
    const cube = cubes.find(x=> x.id === id)
    res.render("details", {cube})
}