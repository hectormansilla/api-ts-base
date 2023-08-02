import { Auth } from "./interface.auth";

export interface User extends Auth {
  name: string;
  role: 10 | 23 | 86;
  description: string;
}