const db_controller = require("./dbController");



class Controller {
  fetch_data() {
    let data = db_controller.fetch_data();
    console.log(`CONTROLLER:   ${data}`);
    return data;
  }

  update_data(){
    const receivedData = db_controller.update_data(); 
    console.log('Received data:', receivedData);
    res.send('Data updated');
   
  }


  add_data(map, key, content) {
    map[key] = content;
}
}








// Export the Helper class
module.exports = new Controller();
