import React from 'react';
import './Pending.css';

function Pending () {
  return (
<div className="contener2">
<div className="buten">
    <div but2>
        <h1 className="english">English(101)</h1>
        <div className="buttons2">
            <span>View</span>
            <span>Download</span>
            <span>SUBMIT</span>
        </div> 
    </div>
</div>

    <div className="contener3">
        <h1 className="assign">Assign 1</h1>
        <div className="Data">
        <div className="bord">
            <ul>
            <li>Homework Date</li>
            <li>Submission Date</li>
            <li>Created By</li>
            </ul>
        </div>
        <div className="Date">
            <ul>
            <li>04/04/2024</li>
            <li>15/04/2024</li>
            <li>Joe Black(9000)</li>
            </ul>
        </div>
        </div>
    <div className="contener4">
        <h1 className="description">Description</h1>
        <span>Please submit homework before last date.</span>
    </div>
</div>
</div> 
);
}

export default Pending;