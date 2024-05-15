interface Icredential {
  id: number;
  username: string;
  password: string;
  img: string;
  role: Role;
}

type Role = "USUARIO" | "ADMINISTRADOR" | "SUPER_ADMIN" | "SPECIALIST";

export { Icredential, Role };
