import { Iappointment, Opciones, Status } from "../Interfaces/Appointments";
import Iuser from "../Interfaces/User";


interface Dto_appointment {
          date: string;
          time: string;
          user_Id: number; //referencia al usuario
          specialist_Id?: number; //referencia al especialista
}

const list_appointment:Iappointment[]=[
          {
                    id:2,    
                    date:"12/12/12",
                    time:"12.12",
                    user_Id:2,
                    specialist_Id:2,
                    description:"CONSULTA",
                    status:"ACTIVE"
          }
]
/*Implementar una función que pueda retornar el arreglo completo de turnos. */
export const get_all_appointments = ():Array<Iappointment>=>{
return list_appointment
}

/*Implementar una función que pueda obtener el detalle de un turno por ID.*/

export const get_detail_appointment = (id_appointment:number):Iappointment|null=>{
const id_detail = list_appointment.find((appointment)=>appointment.id===id_appointment)
if (!id_detail) {
     console.log("No se encontro ningun turno");
      return null    
} else {
          console.log(`Aqui tienes el detalle del turno: ${id_detail.date}, ${id_detail.description}`);
          
          return id_detail
}
}

/*Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.*/

export const create_appointment = (data_appointment:Dto_appointment, id_user:Iuser, description:Opciones, status:Status):Iappointment=>{
const {id} = id_user
const new_appointment:Iappointment = {
          id: +1,
          date: data_appointment.date,
          time: data_appointment.time,
          user_Id: id,
          description: description,
          status:status
}
return new_appointment
}
/*Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”. */

export const modify_appointment = (id_appointment:Iappointment):Iappointment|null|undefined=>{
const {id} = id_appointment
const found_appointment:Iappointment|undefined = list_appointment.find((app)=>app.id === id)
if (!found_appointment) {// si no lo encontramos
          console.error("Error.No se encontro el turno");
          return null
} 
if (found_appointment.status === "CANCELLED") {//si ya esta cancelado
          console.warn("El turno ya se encuntra en estado CANCELLED")
          return found_appointment
}
if (found_appointment.status === "ACTIVE") {//si lo encontramos y tiene status activo
          found_appointment.status = "CANCELLED"
          return found_appointment
}
}