import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "jwthoidanit001",
});

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  let { email } = req.body;
  let { password } = req.body;
  let { username } = req.body;

  connection.query(
    "INSERT INTO users(email,password,username) VALUES (?,?,?)",
    [email, password, username],
    function (err, results, fields) {
      console.log(results);
      //console.log(fields);
    }
  );

  return res.send("ateset thoi");
};

module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateNewUser,
};
