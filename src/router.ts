import {Router} from "express"
import User from "./models/user"
import { createAccount } from "./handlers"

const router = Router()

router.post("/auth/register", createAccount)
    
export default router