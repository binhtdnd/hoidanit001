import bcrypt from "bcryptjs";
import mysql2 from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const createNewUser = async (email, password, username) => {
  const connection = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "jwthoidanit001",
    Promise: bluebird,
  });
  let hash = hashPassword(password);

  //run ok
  //   connection.query(
  //     "INSERT INTO users(email,password,username) VALUES (?,?,?)",
  //     [email, hash, username],
  //     function (err, results, fields) {
  //       //   console.log(results);
  //       //console.log(fields);
  //     }
  //   );

  try {
    const [rows, fields] = await connection.execute(
      "INSERT INTO users(email,password,username) VALUES (?,?,?)",
      [email, hash, username]
    );
  } catch (e) {
    console.log("check err: ", e);
  }
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

const deleteUser = async (id) =>{

  const connection = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "jwthoidanit001",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("delete from users where id=?",[id]);
    return rows;
  } catch (e) {
    console.log("check err: ", e);
  }
}

const getUserById = async (id) =>{

  const connection = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "jwthoidanit001",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("select * from users where id=?",[id]);
    return rows;
  } catch (e) {
    console.log("check err: ", e);
  }
}
 const updateUserById= async(email,username,id)=>{
  const connection = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "jwthoidanit001",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("update users set email =?, username=? where id=?",[email,username,id]);
    return rows;
  } catch (e) {
    console.log("check err: ", e);
  }
 }
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,updateUserById
};
