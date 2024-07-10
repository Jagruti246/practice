// server.js
const express = require('express');
const app = express();
const port = 3001;
const path = require("path");
// const my_map = {};
// Middleware to parse JSON bodies
app.use(express.json());


 require("./src/routes/api-routes")(app);




// Endpoint to handle POST requests with JSON body
// app.post('/api/update', (req, res) => {
//     const receivedData = req.body; // Accessing the
//     console.log('Received data:', receivedData);
//     if (receivedData.id != null) {
//         update_map(my_map, receivedData.id, receivedData);
//         console.log('Map data:', my_map);
//     }

//      res.json({ message: 'Data updated successfully', data: my_map });
    
// });

//remove 


// let my_map = new Map();
// my_map.set('1', { name: 'Item 1' });
// my_map.set('2', { name: 'Item 2' });
// my_map.set('3', { name: 'Item 3' });


// const remove_from_map = (map, id) => {
//     map.delete(id);
// };



// app.post('/api/remove/:id', (req, res) => {
//     const id = req.params.id; // Accessing the 'id' parameter from the route
//     console.log('Received id:', id);

//     if (id != null) {
//         remove_from_map(my_map, id);
//         console.log('Map data:', my_map);
//     }

//     res.json({ message: 'Data removed successfully', data: Array.from(my_map) });
// });




//read data
app.get('/api/read', (req, res) => {
    res.json({ message: 'Data', data: my_map });
});

  





// function update_map(map, key, value) {
//     map[key] = value;
// }
// function remove_from_map(map, key) {
//     delete map[key];
// }

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});