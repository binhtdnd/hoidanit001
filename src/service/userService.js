import bcrypt from "bcryptjs";
import mysql2 from "mysql2";
const salt = bcrypt.genSaltSync(10);

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "jwthoidanit001",
});

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const createNewUser = (email, password, username) => {
  let hash = hashPassword(password);
  connection.query(
    "INSERT INTO users(email,password,username) VALUES (?,?,?)",
    [email, hash, username],
    function (err, results, fields) {
      //   console.log(results);
      //console.log(fields);
    }
  );
};

module.exports = {
  createNewUser,
};
