import React from 'react';
import './Submitted.css';

function Submitted () {
  return (
<div className=" Scontener2">
<div className="Sbuten">
    <div but2>
        <h1 className="Senglish">English(101)</h1>
        <div className="Sbuttons2">
            <span>View</span>
            <span>Download</span>
            <span>SUBMIT</span>
        </div> 
    </div>
</div>

    <div className="Scontener3">
        <h1 className="Sassign">Assign 1</h1>
        <div className="SData">
        <div className="Sbord">
            <ul>
            <li>Homework Date</li>
            <li>Submission Date</li>
            <li>Created By</li>
            </ul>
        </div>
        <div className="SDate">
            <ul>
            <li>04/04/2024</li>
            <li>15/04/2024</li>
            <li>Joe Black(9000)</li>
            </ul>
        </div>
        </div>
    <div className="Scontener4">
        <h1 className="Sdescription">Description</h1>
        <span>Please submit homework before last date.</span>
    </div>
</div>
</div> 
);
}

export default Submitted;