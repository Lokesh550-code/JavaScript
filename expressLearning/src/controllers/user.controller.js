export const getUser = (req, res) => {
  res.status(200).json({ message: "Get user" });
};

export const getUserById = (req, res) => {
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
