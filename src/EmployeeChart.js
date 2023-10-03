import React from 'react';
import { Line } from 'react-chartjs-2';

const EmployeeChart = ({ employee }) => (
  <div>
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
);

export default EmployeeChart;
