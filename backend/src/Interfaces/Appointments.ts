interface Iappointment {
  id: number;
  date: string;
  time: string;
  user_Id: number; //referencia al usuario
  specialist_Id?: number; //referencia al especialista
  description: Opciones;//referencia al type de abajo
  status:Status;
}
type Opciones = "CONSULTA" | "SESION TATTOO" | "PERFORACION"
type Status = "ACTIVE"|"CANCELLED"
export  {Iappointment, Opciones, Status}