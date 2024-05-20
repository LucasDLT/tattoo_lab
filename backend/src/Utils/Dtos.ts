import { Iappointment } from "../Interfaces/Appointments";
import { Ispecialist } from "../Interfaces/Specialist";
import Iuser from "../Interfaces/User";

interface Dto_credential {
          username: string;
          password: string;
          img?: string;
        }
interface Dto_appointment {
          date: string;
          time: string;
          user_Id: number; //referencia al usuario
          specialist_Id?: number; //referencia al especialista
}

interface Dto_users {
          name: string;
          surname: string;
          email: string;
          phone: number;
          birthdate: string;
          nDni: number;
          credentialsId: number; //referencia al par de credenciales que posee el usuario.
          username:string;
          password:string
        }
interface Dto_admin {
          name: string;
          surname: string;
          email: string;
          phone: number;
          birthdate: string;
          nDni: number;
          credentialsId: number; //referencia al par de credenciales que posee el usuario.
          username:string;
          password:string
          users:Array<Iuser>,
          specialists:Array <Ispecialist>,
          appointments:Array <Iappointment>,
}
export {Dto_credential, Dto_appointment, Dto_users}