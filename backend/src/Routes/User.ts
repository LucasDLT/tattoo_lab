import { getUserController } from "../Controllers/getUser";
import { Router } from "express";
const userRouter: Router = Router();


userRouter.get('/usuarios', getUserController)
userRouter.post("/", )
userRouter.put("/", )
userRouter.delete("/", )


export default userRouter