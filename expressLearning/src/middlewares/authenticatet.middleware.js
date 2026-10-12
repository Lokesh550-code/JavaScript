const authenticate = (req, res, next) => {
  const token = req.header.authorization;

  if (!token) {
    return res.status(401).json({ message: "Athentication required" });
  }

  req.user = {
    id: 234,
    name: "Lazy",
    role: "Student",
  };
};

export default authenticate;
