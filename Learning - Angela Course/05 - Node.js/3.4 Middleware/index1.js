import express from "express";

import {dirname, join} from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const port = 3000;

// 1. Parse HTML form data
app.use(express.urlencoded({extended : true}));

// 2. Display the HTML form 
app.get("/", (req,res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
})

// 3. Receive submitted form data
app.post("/submit",(req,res)=> {
  console.log(req.body);

  res.send("<h2>Form submitted successfully</h2>")
})

app.listen(port, () => {
  console.log("Server running successfully !")
})