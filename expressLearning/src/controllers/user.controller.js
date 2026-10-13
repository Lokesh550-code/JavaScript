import ApiError from "../utils/ApiError";

export const getUser = (req, res) => {
  res.status(200).json({ message: "Get user" });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await user.findById(id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  res.status(200).json({ success: true, data: user });
};

export const createUser = (req, res) => {
  res.status(201).json("User created");
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.status().json({ message: "Delete User", id });
};
