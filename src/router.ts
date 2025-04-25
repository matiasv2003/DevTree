import {Router} from "express"

const router = Router()

router.get("/auth/register", (req, res) => {
    console.log("Desde Register")
})
router.post("/auth/register", (req, res) => {
    console.log(req)
})

export default router