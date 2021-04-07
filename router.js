const { Router } = require("express")
const router = Router()
const about = require("./controllers/about")
const create = require("./controllers/create")
const home = require("./controllers/home")

router.get("/", home)
router.get("/create", create)
router.get("/about", about)


module.exports = router