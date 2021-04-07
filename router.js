const { Router } = require("express")
const router = Router()
const about = require("./controllers/about")
const create = require("./controllers/create")
const createCube = require("./controllers/createCube")
const details = require("./controllers/details")
const home = require("./controllers/home")
const notFound = require("./controllers/notFound")

router.get("/", home)
router.get("/create", create)
router.get("/about", about)
router.get("/details/:id", details)
router.post("/create", createCube)

router.get("*", notFound)

module.exports = router