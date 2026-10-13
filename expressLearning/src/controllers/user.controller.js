import ApiError from "../utils/ApiError";

export const getUser = (req, res) => {
  res.status(200).json({ message: "Get user" });
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await user.findByOne();

    if (!user) {
      throw new ApiError(400, "User not found");
    }

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
  const { id } = req.params;

  res.status(200).json({ message: "Get user", id });
};

export const createUser = (req, res) => {
  res.status(201).json("User created");
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.status().json({ message: "Delete User", id });
};
