import express from "express";
import * as userService from "../service/UserService";

const router = express.Router()

router.get('/test', function (req, res) {
  res.send(userService.testUserService())
})

export default router;
