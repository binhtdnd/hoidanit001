import bcrypt from "bcryptjs";
import userService from "../service/userService";
const salt = bcrypt.genSaltSync(10);

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = async (req, res) => {
  let userList = await userService.getUserList();
  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
  let { email } = req.body;
  let { password } = req.body;
  let { username } = req.body;

  userService.createNewUser(email, password, username);

  return res.send("ateset thoi");
};

module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateNewUser,
};
