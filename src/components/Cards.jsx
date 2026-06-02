import React from "react";

function Cards() {

  const data = [
    {
      title: "Employee Details",
      text: "Employee details process is used to store and manage employee personal and job information."
    },

    {
      title: "View Employee Details",
      text: "HR can easily view and manage all employee details in one place."
    },

    {
      title: "View Leave Details",
      text: "HR can easily view and manage employee leave details in one place."
    },

    {
      title: "Attendance & Leave",
      text: "Attendance and leave management process is used to track employee attendance and leave records."
    }
  ];

  return (
    <div className="card-section">

      {data.map((item, index) => (

        <div className="card" key={index}>

          <h3>{item.title}</h3>

          <p>{item.text}</p>

        </div>

      ))}

    </div>
  );
}

export default Cards;