import React, { useState, useEffect } from 'react';
import './App.css';
import Staff from './components/Staff';
import EditStaff from './components/EditStaff';
import AddStaff from './components/AddStaff';
import Clock from './components/Clock';

const App = () => {
  const [currentStaffNum, setCurrentStaffNum] = useState(null);
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    fetch('./data/staff.json')
      .then(resp => resp.json())
      .then(myData => {
        console.dir(myData);
        setStaffMembers(myData);
      });
  }, []);

  const updateStaff = (updateData) => {
    console.dir(updateData);
    const tempStaffAr = [...staffMembers];
    console.dir(tempStaffAr[updateData.arIndex]);
    tempStaffAr[updateData.arIndex] = {
      name: updateData.name,
      email: updateData.email,
    };
    setCurrentStaffNum(null);
    setStaffMembers(tempStaffAr);
  };

  const addStaff = (addData) => {
    console.dir(addData);
    const tempStaffAr = [...staffMembers];
    tempStaffAr.push(addData);
    setCurrentStaffNum(null);
    setStaffMembers(tempStaffAr);
  };

  const deleteStaff = (updateData) => {
    console.dir(updateData);
    const tempStaffAr = [...staffMembers];
    console.dir(tempStaffAr[updateData.arIndex]);
    tempStaffAr.splice(updateData.arIndex, 1);
    setCurrentStaffNum(null);
    setStaffMembers(tempStaffAr);
  };

  // Render conditions
  let editBox;
  if (currentStaffNum === null) {
    editBox = <div>Not Set</div>;
  } else {
    editBox = (
      <EditStaff
        name={staffMembers[currentStaffNum].name}
        arIndex={currentStaffNum}
        email={staffMembers[currentStaffNum].email}
        updateEvent={updateStaff}
        deleteEvent={deleteStaff}
      />
    );
  }

  const staffAr = staffMembers.map((obj, i) => (
    <Staff
      key={i}
      name={obj.name}
      email={obj.email}
      editEvent={() => setCurrentStaffNum(i)}
    >
      Some content
    </Staff>
  ));

  // Now render
  return (
    <div className="App">
      <header>
        <h1>SPA - Editor</h1>
        <div>
          <Clock />
        </div>
      </header>
      <main>
        <div className="staffGrid">{staffAr}</div>
        <div className="sideBar">
          {editBox}
          <div>
            <AddStaff addEvent={addStaff} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
