export interface userRegister {
  name: string | null;
  email: string | null;
  username: string | null;
  password: string;
  confirmPassword: string;
}

// typescriopt interface to register user, gracefull handlingling of null values