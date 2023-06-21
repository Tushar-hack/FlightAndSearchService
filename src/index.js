const express = require('express');
const body_parser = require('body-parser');
const { PORT } = require('./config/server_config'); 

const app = express();

app.use(body_parser.urlencoded({ extended:true }));
app.use(body_parser.json());

app.listen(PORT,async () => {
    console.log(`Server started at PORT ${PORT}`);
});