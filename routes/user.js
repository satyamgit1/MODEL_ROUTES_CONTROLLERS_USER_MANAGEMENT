const express = require('express');
const router = express.Router();
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handlePutUserById, handleCreateNewUser } = require("../controllers/user");

router.route("/")
  .get(handleGetAllUsers)
  .post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .put(handlePutUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
