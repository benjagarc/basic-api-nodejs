import { Optional } from "sequelize";

export interface userAttributes {
  id: number;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes
  extends Optional<userAttributes, "id" | "createdAt" | "updatedAt"> {}
