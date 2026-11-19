import React from 'react';

const Dashboard = ({ attendance, leaves }) => {
  return (
    <section>
      <h2>Dashboard</h2>
      <p>Total Days Present: {attendance.length}</p>
      <p>Total Leaves Applied: {leaves.length}</p>
    </section>
    
  );
};

export default Dashboard;