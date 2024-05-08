import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

const server:Application = express();

server.use(express.json());
server.use(cors);
server.use(morgan("dev"));

export default server;
