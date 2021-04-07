const handlebars = require("express-handlebars")
const express = require("express")

module.exports = function(app) {
    app.engine("hbs", handlebars({
        extname: "hbs"
    }))
    app.set("view engine", "hbs")
    app.use(express.static("static"))
}