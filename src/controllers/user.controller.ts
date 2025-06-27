import { Request, Response } from "express";
import { User } from "../models/index";
import { createUserSchema } from "../schemas/user.schema";
import bcrypt from "bcrypt";
import { UserCreationAttributes } from "../interfaces/user.interface";
import colors from "colors";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json({ data: users });
  } catch (error) {
    res.status(500).json({ message: `Error to get users ${error}` });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const result = createUserSchema.safeParse(req.body as UserCreationAttributes);
  if (!result.success) {
    res
      .status(400)
      .json({ error: "Error to create user", details: result.error.format() });
  }

  try {
    const hashedPassword = await bcrypt.hash(result?.data?.password ?? "", 10);
    const withPassword = {
      ...result.data,
      password: hashedPassword,
    };
    const newUser = await User.create(withPassword as UserCreationAttributes);
    res.status(201).json({ data: newUser });
  } catch (error) {
    res.status(400).json({ message: `Error to create user`, error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ error: "User does not exist" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ error: "email or password invalid" });
      return;
    }

    res.status(201).json({ message: "Login successfully", user: { ...user } });
  } catch (error) {
    console.log(colors.red(`${error}`));
    res.status(500).json({ error: "Error in the server", details: error });
  }
};
