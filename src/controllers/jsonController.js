const helper = require("./helper");


class JsonController {
  fetch_data() {
    let data = helper.fetch_data();
    console.log(`JSON-CONTROLLER:   ${data}`);
    return data;
  }

  update_data(){
    const receivedData = helper.update_data(); 
    console.log('Received data:', receivedData);
    res.send('Data updated');
  }
}



// Export the Helper class
module.exports = new JsonController();
