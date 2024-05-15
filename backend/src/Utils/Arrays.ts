import { Iappointment } from "../Interfaces/Appointments";
import { Icredential } from "../Interfaces/Credential";
import Iuser from "../Interfaces/User";

const list_appointment: Iappointment[] = [
  {
    id: 2,
    date: "12/12/12",
    time: "12.12",
    user_Id: 2,
    specialist_Id: 2,
    description: "CONSULTA",
    status: "ACTIVE",
  },
];
const list_user: Iuser[] = [
  {
    id: 1,
    name: "lucas",
    surname: "dlt",
    email: "lucas@mail.com",
    phone: 11223344,
    birthdate: 12 / 1 / 1090,
    nDni: 12123123,
    credentialsId: 1,
  },
];

let list_credential: Icredential[] = [
  {
    id: 0,
    username: "lucas",
    password: "1234",
    img: "fotito",
    role: "USUARIO",
  },
];
export {list_appointment, list_credential, list_user}