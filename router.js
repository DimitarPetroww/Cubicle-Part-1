const { Router } = require("express")
const router = Router()
const about = require("./controllers/about")
const create = require("./controllers/create")
const home = require("./controllers/home")
const notFound = require("./controllers/notFound")

router.get("/", home)
router.get("/create", create)
router.get("/about", about)
router.get("*", notFound)

module.exports = router