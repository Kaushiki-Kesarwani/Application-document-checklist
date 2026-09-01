import { User } from "../model/authmodel";

export const register = () => {
  try {
    const { name, email, password } = req.body;

    if (userAlreadyExists(email)) {
      return res.status(409).json({
        success: false,
        message: "user already exists",
      });
    }

    const user = createNewUser(name, email, password);
    return res.status(201).json({
      success: true,
      message: user,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
};
