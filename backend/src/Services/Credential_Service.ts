import { Icredential, Role } from "../Interfaces/Credential";

interface Dto_credential {
  username: string;
  password: string;
  img?: string;
}

/*Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.*/

export const create_credential = (data: Dto_credential, role:Role):number => {
  // falta poner mas adelante el async await cuando llamemos a la BDD
  const { username, password } = data;
  const new_credential: Icredential = {
    id: +1,
    username: data.password,
    password: data.password,
    img: data.password,
    role: role,
  };
  return new_credential.id;
};

let list_credential: Icredential[] = [
  {
    id: 0,
    username: "lucas",
    password: "1234",
    img: "fotito",
    role: "USUARIO",
  },
];
/*Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.*/

export const credential_validation = (data: Icredential):number|null => {
  const { username, password } = data;
  const validation_username = list_credential.find(
    (credential) => username === credential.username
  );
  if (!validation_username) {
    console.log("usuario incorrecto");
    return null;
  }
  if (validation_username.password === password) {
    console.log("Bienvenido, usuario validado con exito");
    return validation_username.id;
  } else {
    console.log("Error, password incorrecto");
    return null
  }

};
