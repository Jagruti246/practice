const { json } = require("body-parser");
const json_controller = require("./jsonController");


class DbController {
  fetch_data() {
    return json_controller.fetch_data();
  }

  remove_data_from_map( receivedId){
    json_controller.remove_data_from_map(receivedId);
  }



  add_data_to_map( receivedId,  receivedData){
    json_controller.add_data_to_map(receivedId,  receivedData);
  }
}

// Export the Helper class
module.exports = new DbController();
