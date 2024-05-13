import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import adminRouter from "./Routes/Admin";
import appointmentsRouter from "./Routes/Appointments";
import specialistRouter from "./Routes/Specialist";
import superAdminRouter from "./Routes/Super_Admin";
import userRouter from "./Routes/User";


const server: Application = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(userRouter);
server.use(adminRouter);
server.use(superAdminRouter);
server.use(specialistRouter);
server.use(appointmentsRouter);

export { server };
