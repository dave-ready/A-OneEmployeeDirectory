import React from "react";
import "/style.css";


function Navbar({ handleSortByName }, props) {
  return (
    <form className="navbar">
      <div className="form">
        <label htmlFor="language"></label>
        <input
          value={props.value}
          onChange={props.onChange}
          name="term"
          list="term"
          type="text"
          className="form"
          placeholder="Search for an employee"
          id="term"
        />
        <div className="buttons">
            <button onClick={handleSortByName} className="namebtn">Sort Alphabetically!</button>      
        </div>

      </div>
    </form>
  );
}

export default Navbar;














//function Navbar({ handleSearchTerm, searchTerm, handleSortByName }, props) { 

//    function handleFormSubmit(event){

//        event.preventDefault()  
//    }
    
//    return (
//        <div className="navbar">
//            <form >
//                <input
//                    value={searchTerm} 
//                    onChange={handleSearchTerm} 
//                    className="form"
//                    type="text"
//                    placeholder="search employee"/>
//            </form>
//            <div className="buttons">
//                <button onClick={handleSortByName} className="namebtn">Filter Alphabetically!</button>
//                
//            </div>
//            
//        </div>
//    )
//}

//export default Navbar;




