import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [name1, setName] = useState([]);
  const [empId1, setEmpId] = useState([]);
  const [jobTitle1, setJobTitle] = useState([]);
  const [experienceyear1, setExperienceyear] = useState([]);
  const [contactNumber1, setContactNumber] = useState([]);
  const [email1, setEmail] = useState([]);

  const postData = () => {
    const data = {
      name: name1,
      empId: empId1,
      jobTitle: jobTitle1,
      experienceyear: experienceyear1,
      contactNumber: contactNumber1,
      email: email1,
    };
    Axios.post("http://localhost:3001/employee", data).then((res) => {
      window.location.reload();
    });
  };
  return (
    <div className="aa">
      <p>
        Name :
        <input value={name1} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        EmpId :
        <input value={empId1} onChange={(e) => setEmpId(e.target.value)} />
      </p>
      <p>
        JobTitle :
        <input
          value={jobTitle1}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </p>
      <p>
        ExperianceYear :
        <input
          value={experienceyear1}
          onChange={(e) => setExperienceyear(e.target.value)}
        />
      </p>
      <p>
        ContactNumber :
        <input
          value={contactNumber1}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </p>
      <p>
        E-mail :
        <input value={email1} onChange={(e) => setEmail(e.target.value)} />
      </p>
      <p className="button">
        <button className="txt" onClick={() => postData()}>
          Submit
        </button>
      </p>
    </div>
  );
}

export default App;
