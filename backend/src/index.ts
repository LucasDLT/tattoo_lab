import express from "express"
import server from "./server"
import { PORT } from "./envs"


server.listen(PORT, ()=>{
          console.log(`Por running in port: ${PORT}`);
          
})