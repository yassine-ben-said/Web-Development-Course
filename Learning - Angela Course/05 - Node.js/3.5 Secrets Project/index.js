import express from "express";
import {dirname, join} from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = 3000;

// Parse HTML form data
app.use(express.urlencoded({extended : true }));

const __dirname = dirname(fileURLToPath(import.meta.url));

// Homepage
app.get("/" ,(req,res) => {
    res.sendFile(join(__dirname, "public", "index.html"))
})

// Custom Middleware
function checkAccess(req,res,next) {
    const password = req.body.password;
    if (password === "ILoveProgrammingComplexStuff") {
        next();
    }
    else {
        res.status(401).send("<h2> Access Denied ❌ </h2>")
    }
}

// Protected route
app.post("/check", checkAccess, (req,res)=> {
        res.sendFile(join(__dirname , "public" , "secret.html"))
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})