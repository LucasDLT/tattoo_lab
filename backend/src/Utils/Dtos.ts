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
          birthdate: number;
          nDni: number;
          credentialsId: number; //referencia al par de credenciales que posee el usuario.
          username:string;
          password:string
        }
export {Dto_credential, Dto_appointment, Dto_users}