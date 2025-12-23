import * as userService from "../services/userService.js";

export const registerUser = (req, res) => {
  const data = req.body;
  const resp = userService.registerUser(data);

  res.status(201).send(resp);
};
