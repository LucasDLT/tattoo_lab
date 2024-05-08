import { Router } from "express";
import server from "../server";

const enrutador: Router = Router();
const userRouter: Router = Router();
const adminRouter: Router = Router();
const superAdminRouter: Router = Router();
const specialistRouter: Router = Router();
const appointmentsRouter: Router = Router();

server.use(enrutador);

enrutador.use("/user", userRouter);
enrutador.use("/admin", adminRouter);
enrutador.use("/super_admin", superAdminRouter);
enrutador.use("/specialist", specialistRouter);
enrutador.use("/appointments", appointmentsRouter);

export {
  userRouter,
  adminRouter,
  superAdminRouter,
  specialistRouter,
  appointmentsRouter,
};
