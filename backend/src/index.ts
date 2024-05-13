import {server} from "./server"
import { PORT } from "./Config/envs"


server.listen(PORT, ()=>{
          console.log(`Port running in port: ${PORT}`);
          
})