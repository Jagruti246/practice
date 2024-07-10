const helper = require("./helper");


class JsonController {
  fetch_data() {
    return helper.fetch_data();
  }

  remove_data_from_map( receivedId){
    helper.remove_data_from_map(receivedId);
  }

  add_data_to_map( receivedId,  receivedData){
    helper.add_data_to_map(receivedId,  receivedData);
  }
}



// Export the Helper class
module.exports = new JsonController();
