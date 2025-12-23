import * as userService from "../services/userService.js";

export const registerUser = async (req, res) => {
  try {
    const data = req.body;
    const resp = await userService.registerUser(data);

    res.status(201).send(resp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
