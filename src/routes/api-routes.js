const controller = require("../controllers/controller");
const express = require('express');

module.exports = function (app) {

    app.use(express.json());
 

  app.get("/text", (req, res) => {
    res.send("Welcome");
  });

  app.get("/json", (req, res) => {
    res.json({ page: "JSON page" });
  });

  app.get("/fetch-data", (req, res) => {
    let data = controller.fetch_data();
    console.log(`API-ROUTES:   ${JSON.stringify(data)}`);
    res.json(data);
  });


// app.post("/api/update", (req, res) => {
//   const receivedData = req.body;
//     receivedData = controller.update_data(receivedData); 
//     console.log('Received data:', receivedData);
//     res.send('Data updated');
// });

app.post("/api/update", (req, res) => {
    const receivedData = req.body;
    const map = controller.fetch_data();
    controller.add_data_to_map( receivedData.id, receivedData); 
    console.log('Received data:', receivedData);
    res.json({message: 'New data added:', data: map });

});

app.delete('/api/remove/:id', (req, res) => {
  const receivedId = req.params.id; 
  const map = controller.fetch_data();
  // const student_records = controller.get_map_data();
  controller.remove_data_from_map(receivedId);
  res.json({ message: "Data removed", data: map });
});



}



