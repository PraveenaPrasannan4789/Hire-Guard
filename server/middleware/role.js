// middleware/role.js
function role(allowedRoles = []) {
  return (req, res, next) => {
    // req.user is added by auth middleware
    if (!req.user) return res.status(401).json({ msg: "Unauthorized" });

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Forbidden: Access denied" });
    }
    next();
  };
}

module.exports = role;
