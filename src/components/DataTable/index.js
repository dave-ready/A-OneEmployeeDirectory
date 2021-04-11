import React, { useState, useEffect } from "react";
import "./style.css";
import App from "../../App";
//import API from "../../utils/API";

<App />;

function DataTable(props) {

  return (
    <>
      {props.employees
        .filter((response) => {

          if (!props.searchTerm) {

            return response;
          }else if (response.name.first.toLowerCase().includes(props.searchTerm.toLowerCase())) {

            return response
          }
        })
        .map((response) => (

          <div className="dataTable">
            <div className="img-container">

              <img
                id="pic"
                alt={response.name.first}
                src={response.picture.large}
              />

              <p id="info">
                {" "}
                {response.name.first} {response.name.last}{" "}
              </p>

              <p id="email">{response.email}</p>
              
            </div>
          </div>
        ))}
    </>
  );
}

export default DataTable;