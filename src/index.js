const express = require("express");
const app = express();
const port = 6969;

app.get("/", (req, res) => {
  res.send("<h1>Project Hidup dan Mati</h1>");
});

app.get("/description", (req, res) => {
  res.send({
    status: "success",
    data: [
      "<p>project ini tercipta untuk memenuhi syarat kelulusan ke tahap bootcamp atau project akhir</p>",
    ],
  });
});

app.listen(port, (error) => {
  if (error) return console.log({ err: error.message });
  console.log(`API berhasil running di port ${port}`);
});