import { Request, Response } from "express";


export const getUserController =  (req:Request, res:Response)=>{
          res.status(200).send("hola")
} 

