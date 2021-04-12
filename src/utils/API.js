import axios from "axios";

export default {
  employeeSearch: function() {
    console.log("Queried the API!")
    return axios.get("https://randomuser.me/api/?exc=gender,dob,cell,nat&results=30");
  }
};



//  function employeeSearch() {
//    console.log("Queried the API!")
//    return axios.get("https://randomuser.me/api/?exc=gender,dob,cell,nat&results=30");
//  };
//export default {

//if doesn't work wrap in here

//};

//export default employeeSearch();


