import axios from "axios";


export default {
  employeeSearch: function() {
    console.log("Queried the API!")
    return axios.get("https://randomuser.me/api/?exc=gender,dob,cell,nat&results=30");
  },
};