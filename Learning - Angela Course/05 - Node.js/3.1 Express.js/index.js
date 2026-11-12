import express from "express"

// 1. Create an Express Application
const app = express();

// 3.a Define a port Number
const port = 3000;

// 2. Define a route 
app.get("/", (req,res) => {
	res.send("Hello world !");
});

// 3.b Start the server 
app.listen(port, () => {
		console.log(`Server running on port ${port} .`);
} )