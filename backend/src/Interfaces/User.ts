interface Iuser {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone:number;
  birthdate: number;
  nDni: number;
  credentialsId: number; //referencia al par de credenciales que posee el usuario.
}
export default Iuser