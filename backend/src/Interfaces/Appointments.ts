interface Iappointment {
  id: number;
  date: Date;
  time: number;
  user_Id: number; //referencia al usuario
  specialist_Id?: number; //referencia al especialista
  is_Active: boolean; // puede ser “true” o “false”
  description: Opciones;//referencia al enum de abajo
}
enum Opciones {
  opcion1 = "CONSULTA",
  opcion2 = "SESION TATTOO",
  opcion3 = "PERFORACION",
}
export  {Iappointment, Opciones}