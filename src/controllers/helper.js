const dataBase = require("./data");

class Helper {


    add_data_to_map(key, value) {
      let map = dataBase.map_data;
        map[key] = value;
      }
    remove_map(map, key) {
        delete map[key];
    }

    fetch_data(){
      let map = dataBase.map_data;
      return map;
    }

    }


//  update_map(map, key, value) {
//     map[key] = value;
// }




  // Export the Helper class
  module.exports = new Helper();
