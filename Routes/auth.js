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

  
  module.exports = router;