import React, { useEffect, useState } from "react";
import "./style.css";

function Navbar({ handleSearchTerm, searchTerm, handleSortByName }, props) { 
    function handleFormSubmit(event){
        event.preventDefault()
    }
    
    return (
        <div className="navbar">
            <form >
                <input
                    value={searchTerm} 
                    onChange={handleSearchTerm} 
                    className="form"
                    type="text"
                    placeholder="employee search"/>
            </form>
            <div className="buttons">
                <button onClick={handleSortByName} className="namebtn">Sort Alphabetically!</button>
                
            </div>
            
        </div>
    )
}

export default Navbar;







