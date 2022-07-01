const express = require("express");
const app = express();
const port = 6969;

app.use(express.json());

const users = [
  { id: 1, username: "teteg" },
  { id: 2, username: "ejiak" },
  { id: 3, username: "walik" },
];

app.get("/", (req, res) => {
  res.send("<h1>Project Hidup dan Mati</h1>");
});

// get all users
app.get("/users", (req, res) => {
  res.send({
    status: "success",
    message: "User List",
    data: {
      result: users,
    },
  });
});

// create new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.send({
    status: "Success",
    message: "Succes Create New User",
  });
});

// get user by id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const filteredUser = users.filter((user) => user.id == parseInt(id));

  res.send({
    status: "succes",
    message: "Get User by Id",
    data: {
      result: filteredUser,
    },
  });
});

app.listen(port, (error) => {
  if (error) return console.log({ err: error.message });
  console.log(`API berhasil running di port ${port}`);
});
