import { Request, Response} from "express"
import User from "../models/user"

export const createAccount = async (req: Request, res: Response) => {
    await User.create(req.body)

    res.send("Registro creado correctamente")
}