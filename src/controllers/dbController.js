const json_controller = require("./jsonController");


class DbController {
  fetch_data() {
    let data = json_controller.fetch_data();
    console.log(`DB-CONTROLLER:   ${data}`);
    return data;
  }

  update_data(){
    const receivedData = json_controller.update_data(); 
    console.log('Received data:', receivedData);
    res.send('Data updated');
  }
}

// Export the Helper class
module.exports = new DbController();
