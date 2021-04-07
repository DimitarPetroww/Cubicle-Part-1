const app = require("express")()
const config = require("./config/config")
const handlebars = require("express-handlebars")


app.engine("hbs", handlebars({
    extname: "hbs"
}))
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("home", {layout: false})
})

app.listen(config.PORT, () => console.log(`Server is listening on port: ${config.PORT}...`))