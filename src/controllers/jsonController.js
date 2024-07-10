const helper = require("./helper");


class JsonController {
  fetch_data() {
    helper.fetch_data();
  }

  update_data(){
    const receivedData = helper.update_data(); 
    console.log('Received data:', receivedData);
    res.send('Data updated');
  }

  add_data_to_map( receivedId,  receivedData){
    helper.add_data_to_map(receivedId,  receivedData);
  }
}



// Export the Helper class
module.exports = new JsonController();
