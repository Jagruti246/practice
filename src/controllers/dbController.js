const { json } = require("body-parser");
const json_controller = require("./jsonController");


class DbController {
  fetch_data() {
    json_controller.fetch_data();
  }

  update_data(){
    const receivedData = json_controller.update_data(); 
    console.log('Received data:', receivedData);
    res.send('Data updated');
  }



  add_data_to_map( receivedId,  receivedData){
    json_controller.add_data_to_map(receivedId,  receivedData);
  }
}

// Export the Helper class
module.exports = new DbController();
