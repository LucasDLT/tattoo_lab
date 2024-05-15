import { Role } from "../Interfaces/Credential";
import Iuser from "../Interfaces/User";
import { list_user } from "../Utils/Arrays";
import { Dto_users } from "../Utils/Dtos";
import { create_credential } from "./Credential_Service";

/*En el servicio de usuarios:

Implementar una función que pueda retornar el arreglo completo de usuarios.*/



export const get_all_users = (): Array<Iuser> => {
  return list_user;
};

/*Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.*/

export const get_user_id = (data_id: number): Iuser|undefined => {// puede devolver el user o undefined
  const user_by_id = list_user.find((user) => user.id === data_id);
  if (!user_by_id) {
    console.log("No se encontro el usuario con el ID suministrado");
  } else {
    console.log(`se encontro al usuario: ${user_by_id.name}`);
  }
  return user_by_id;
};

/*Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.*/

export const create_user = (data_user:Dto_users, role:Role)=>{//tuve que agregar un segundo parametro por que modifique el serv credenciales
          const credential:number = create_credential(data_user, role)
          const new_user:Iuser={
                    id: + 1,
                    name: data_user.name,
                    surname: data_user.surname,
                    email: data_user.email,
                    phone: data_user.phone,
                    birthdate: data_user.birthdate,
                    nDni: data_user.nDni,
                    credentialsId: credential
          }
          return new_user
}