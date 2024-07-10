const controller = require("./src/controllers/controller");
const express = require('express');

module.exports = function (app) {

    app.use(express.json());
 
    let map_data = {};

app.post("/api/update1", (req, res) => {
    const receivedData = req.body;
    controller.add_data(map_data, receivedData.id, receivedData); 
    console.log('Received data:', receivedData);
    res.json(map_data);

});


}



