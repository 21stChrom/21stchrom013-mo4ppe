import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import localforage from 'localforage';
import { CategoryScale, Chart } from "chart.js";
Chart.register(CategoryScale);
import { Chart, LinearScale } from 'chart.js';
Chart.register(LinearScale);
import { Chart, PointElement } from 'chart.js';
Chart.register(PointElement);
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);
import React, { useState, useEffect } from 'react';
import localforage from 'localforage';
import EmployeeForm from './EmployeeForm';
import EmployeeChart from './EmployeeChart';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [employees]);

  const saveData = () => localforage.setItem('employeeData', employees);

  const loadData = async () => {
    const data = await localforage.getItem('employeeData');
    if (data) {
      setEmployees(data);
    }
  };

  const addEmployee = employee => {
    setEmployees([...employees, employee]);
  };

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      {employees.map((employee, i) => (
        <EmployeeChart key={i} employee={employee} />
      ))}
    </div>
  );
}

export default App;


function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [performance, setPerformance] = useState([0, 0, 0]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [employees]);

  const saveData = () => localforage.setItem('employeeData', employees);

  const loadData = async () => {
    const data = await localforage.getItem('employeeData');
    if (data) {
      setEmployees(data);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newEmployee = { name, id, performance };
    setEmployees([...employees, newEmployee]);
    setName('');
    setId('');
    setPerformance([0, 0, 0]);
  };

  return (
    <div>
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
      {employees.map((employee, i) => (
        <div key={i}>
          <h2>{employee.name}</h2>
          <Line
            data={{
              labels: ['Morning', 'Afternoon', 'Evening'],
              datasets: [
                {
                  label: 'Performance',
                  data: employee.performance,
                  backgroundColor: 'rgba(75,192,192,0.2)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
