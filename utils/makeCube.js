const Cube = require("../models/Cube")
const uniqid = require("uniqid")
const cubes = require("../config/db.json")
const fs = require("fs")
const path = require("path")

module.exports = function(body) {
    Object.assign(body, {id: uniqid()})
    const cube = new Cube(body)
    console.log(cubes);
    cubes.push(cube)
    console.log(cubes);
    fs.writeFile(path.resolve("config", "db.json"), JSON.stringify(cubes), (err) => {
        if(err) {
            console.log(err);
            return
        }
    })
}