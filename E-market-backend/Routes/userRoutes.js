const express = require('express');
const router = express.Router();
const userController= require('../controllers/userControllers');



//users handlers

  // .route("/")
  // .get(getAllUsers)
router.post("/signup",userController.signup);
  // .route("/:id")
  // .get(getUser)
  // .patch(updateUser)
  // .delete(deleteUser);



module.exports = router;