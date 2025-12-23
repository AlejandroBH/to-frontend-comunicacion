import { users } from "../data/users.js";
import bcrypt from "bcrypt";

export const registerUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = { id: Date.now(), ...userData, password: hashedPassword };
  users.push(newUser);
  return newUser;
};
