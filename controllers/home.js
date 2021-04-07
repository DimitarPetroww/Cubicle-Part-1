const url = require("url")
let cubes = require("../config/db.json")

module.exports = (req, res) => {
    const { query } = url.parse(req.url, true)
    if (Object.keys(query).length === 3) {
        cubes = cubes.filter(x => x.name === query.search && x.difficultyLevel >= query.from && x.difficultyLevel <= query.to)
    }
    res.render("home", { cubes })
}