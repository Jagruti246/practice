const my_map = {};


class Helper {
    fetch_data() {
      let data = { page: "My Page" };
      console.log(`HELPER:   ${data}`);
      return data;
    }

    
    update_map(map, key, value) {
        map[key] = value;
      }

  update_data(receivedData){
   //  app.post('/api/update', (req, res) => {
    // const receivedData = req.body;  //Accessing the
         console.log('Received data:', receivedData);
        //  if (receivedData.id != null) {
             update_map(my_map, receivedData.id, receivedData);
             console.log('Map data:', my_map);
        //  }
          res.json({ message: 'Data updated successfully', data: my_map });
       //  });
        }

    }


//  update_map(map, key, value) {
//     map[key] = value;
// }




  // Export the Helper class
  module.exports = new Helper();
