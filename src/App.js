import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import Container from "./components/Container";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import API from "./utils/API";


function App (){

  const [employeeState, setEmployeeState] = useState([]);

  useEffect(function () {
    API.employeeSearch().then((result) => {
      console.log(result.data.results);
      setEmployeeState(result.data.results);
      console.log(employeeState)
    });
  }, []);
 
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ sorted, setSorted] = useState(false);
  const [ data, setEmployees ] = useState([]);
  

  
  function handleSearchTerm(event)  {
    setSearchTerm(event.target.value)
  }

  function handleSortByName() {
    if (!sorted) {
        setEmployees(employeeState.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
        setSorted(true);
    } else {
        setEmployees(employeeState.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
        setSorted(false);
    }
  }


  


  return (
    
    <Container>
      <Navbar 
      handleSearchTerm={handleSearchTerm}
      searchTerm={searchTerm}
      handleSortByName={handleSortByName}
      />
      <Header />
      <DataTable 
      searchTerm={searchTerm}
      employees={employeeState}/>
    </Container>
      
    );
  
}

export default App;











//import logo from './logo.svg';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;
