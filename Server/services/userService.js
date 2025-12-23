import { users } from "../data/users.js";

export const registerUser = (userData) => {
  const newUser = { id: Date.now(), ...userData };
  users.push(newUser);
  return newUser;
};
