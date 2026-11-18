import express from "express";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/",(req,res) => {
  res.sendFile(join(__dirname,"public","index.html"));
})

let bandName = "";
function bandNameGenrator(req,res,next) {
  const street = req.body.street;
  const pet = req.body.pet;
  bandName = street + pet 
  next();
}

app.use(bandNameGenrator);

app.post("/submit",(req,res) => {
  res.send(`<h1> Your brand name is <h1> <h2> ${bandName}🫣🫢`)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
