import bcrypt from "bcryptjs";
import mysql2 from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const createNewUser = (email, password, username) => {
  const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "jwthoidanit001",
    Promise: bluebird,
  });
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

const getUserList = async () => {
  let users = [];
  const connection = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "jwthoidanit001",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("select * from users");
    return rows;
  } catch (e) {
    console.log("check err: ", e);
  }

  //   connection.query("select * from users", function (err, results, fields) {
  //     if (err) {
  //       console.log(err);
  //       return users;
  //     }

  //     users = results;
  //     console.log("🚀 ~ users:", users);
  //     return users;
  //   });
};

module.exports = {
  createNewUser,
  getUserList,
};
