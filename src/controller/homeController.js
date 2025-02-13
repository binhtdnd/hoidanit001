import bcrypt from "bcryptjs";
import userService from "../service/userService";
const salt = bcrypt.genSaltSync(10);

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = async (req, res) => {
  let userList = await userService.getUserList();
  await userService.deleteUser(12)
  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
  let { email } = req.body;
  let { password } = req.body;
  let { username } = req.body;

  userService.createNewUser(email, password, username);

  return res.redirect("/user");
};

const handleDeleteUser = async(req,res)=>{
  await userService.deleteUser(req.params.id)
  return res.redirect("/user")
}

const getUpdateUserPage = async(req,res)=>{
  let id = req.params.id
  let user = await userService.getUserById(req.params.id)
  let userData={}
  if(user && user.length>0){
    userData=user[0]
  }
  return res.render("user-update.ejs",{userData})
}

const updateUser = async(req,res)=>{
  let {email,username} = req.body
  let id = req.params.id
  let user = await userService.updateUserById(email,username,id)
  return res.redirect("/user")
}

module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateNewUser,
  handleDeleteUser,
  getUpdateUserPage,
  updateUser

};
