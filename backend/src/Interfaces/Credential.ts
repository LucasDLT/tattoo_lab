interface Icredential {
  id: number;
  username: string;
  password: string;
  img: string;
  rol:Role;
}

enum Role{
user="USUARIO",
admin="ADMINISTRADOR",
superAdmin="SUPER_ADMIN",
specialist="SPECIALIST",
}
export default Icredential