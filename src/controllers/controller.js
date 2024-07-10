const db_controller = require("./dbController");
const helper = require("./helper");

class Controller {
  fetch_data() {
    db_controller.fetch_data();
  }

  // update_data(){
  //   const receivedData = db_controller.update_data();
  //   console.log('Received data:', receivedData);
  //   res.send('Data updated');

  // }

  add_data_to_map( receivedId,  receivedData){
    db_controller.add_data_to_map(receivedId,  receivedData);
  }


  add_data(key, content) {
    let map_data = helper.map;
    map_data[key] = content;
  }

  remove_data( key) {
    let map_data = helper.map;
    delete map_data[key];
}


}

// Export the Helper class
module.exports = new Controller();
