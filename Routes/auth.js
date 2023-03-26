const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../Controller/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allUsers/:id", getAllUsers);
router.post("/setAvatar/:id", setAvatar);
router.get("/logout/:id", logOut);



module.exports = router;