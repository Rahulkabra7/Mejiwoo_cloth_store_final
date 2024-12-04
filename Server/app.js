const express = require('express');
const app = express();
const routes = require('./Routes/index');
const cors = require('cors');

const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.use((req, res)=>{
    res.status(400).json({message: "Route not Found"})
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});