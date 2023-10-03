import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addEmployee({ name, id, performance: [0, 0, 0] });
    setName('');
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        ID:
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
