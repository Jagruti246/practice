const dataBase = require("./data");

class Helper {


    add_data_to_map(key, value) {
      let map = dataBase.map_data;
        map[key] = value;
      }
    remove_data_from_map( key) {
      let map = dataBase.map_data;
        delete map[key];
    }

    fetch_data(){
      const map = dataBase.map_data;
      return map;
    }

    }


//  update_map(map, key, value) {
//     map[key] = value;
// }




  // Export the Helper class
  module.exports = new Helper();
