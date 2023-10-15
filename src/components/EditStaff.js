import React, { useState } from 'react';

const EditStaff = (props) => {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);

  const changeName = (ev) => {
    console.info(ev.target.value);
    setName(ev.target.value);
  };

  const changeEmail = (ev) => {
    console.info(ev.target.value);
    setEmail(ev.target.value);
  };

  const updateParent = () => {
    props.updateEvent({
      arIndex: props.arIndex,
      name,
      email,
    });
  };

  const deleteParent = () => {
    props.deleteEvent({
      arIndex: props.arIndex,
    });
  };

  return (
    <div className="editStaff">
      <h2>Edit Staff</h2>
      <div>
        <label>Staff Name</label>
        <input type="text" id="staffName" value={name} onChange={changeName} />
      </div>
      <div>
        <label>Staff Email</label>
        <input type="text" id="staffEmail" value={email} onChange={changeEmail} />
      </div>
      <div>
        <button className="btn edit" onClick={updateParent}>
          Update
        </button>
      </div>
      <div>
        <button className="btn del" onClick={deleteParent}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditStaff;
