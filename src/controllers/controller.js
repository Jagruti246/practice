const db_controller = require("./dbController");
const helper = require("./helper");

class Controller {
  fetch_data() {
    return db_controller.fetch_data();
  }


  add_data_to_map( receivedId,  receivedData){
    db_controller.add_data_to_map(receivedId,  receivedData);
  }

  remove_data_from_map( receivedId){
    db_controller.remove_data_from_map(receivedId);
  }

}

// Export the Helper class
module.exports = new Controller();
