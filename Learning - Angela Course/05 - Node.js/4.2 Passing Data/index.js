import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

let message = "Enter your name below 👇"
app.get("/", (req, res) => {
  res.render("index" , {
    message
  })
});

app.post("/submit", (req, res) => {
  const fullName = req.body.fName + req.body.lName;
  res.render("index", {
    message : `There are ${fullName.length} characters in your name`
  })

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
