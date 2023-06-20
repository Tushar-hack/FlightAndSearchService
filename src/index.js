const express = require('express');
const { PORT } = require('./config/server_config'); 

const app = express();


app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});