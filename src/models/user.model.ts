import {
  userAttributes,
  UserCreationAttributes,
} from "../interfaces/user.interface";
import { Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: true, // Sequelize gestiona `createdAt` y `updatedAt` automáticamente
})
export class User extends Model<userAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number; // `!` indica que la propiedad será inicializada por Sequelize

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password!: string;
}
