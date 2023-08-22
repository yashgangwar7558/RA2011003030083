const express = require('express');
require("./db/conn");
const router = require('./routers/trains');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(router)

app.get('/', async (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Server is live at port no. ${port}`);
})