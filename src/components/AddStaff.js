import React, { useState } from 'react';

const AddStaff = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const changeName = (ev) => {
    console.info(ev.target.value);
    setName(ev.target.value);
  };

  const changeEmail = (ev) => {
    console.info(ev.target.value);
    setEmail(ev.target.value);
  };

  const addParent = () => {
    props.addEvent({
      name,
      email,
    });

    // Reset form
    setName("");
    setEmail("");
  };

  return (
    <div className="addStaff">
      <h2>Add Staff</h2>
      <div>
        <label>Staff Name</label>
        <input type="text" id="staffName" value={name} onChange={changeName} />
      </div>
      <div>
        <label>Staff Email</label>
        <input type="text" id="staffEmail" value={email} onChange={changeEmail} />
      </div>
      <div>
        <button className="btn add" onClick={addParent}>Add</button>
      </div>
    </div>
  );
};

export default AddStaff;
