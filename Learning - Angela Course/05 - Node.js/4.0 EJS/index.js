import express from "express";

const app = express();
const port = 3000;

app.set("view engine","ejs");

app.get("/",(req,res)=>{

    const day = new Date();
    const today = day.getDate();

    
    let actualDay = "it's a workday"
    let adv = " let's work harder !"
    if (today === 0 || today === 6) {
        actualDay = "it's a weekend";
        adv = "let's have some fun !"
    }
    res.render("index", {
        actual : actualDay,
        advice : adv
    }
    )
})
app.listen(port,()=>{
    console.log("Server running successfully !")
});