import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import Attendance from './Attendance';
import LeaveForm from './LeaveForm';
import LeaveList from './LeaveList';


const App = () => {
  const [attendance, setAttendance] = useState([]);
  const [leaves, setLeaves] = useState([]);

  const [employees] = useState([
    { 
      empId: 'E001',
       empName: 'John Doe',
        department: 'HR'
     },

    { 
      empId: 'E002',
       empName: 'Jane Smith',
        department: 'IT' 
    },
    { 
      empId: 'E003', empName: 'Mike Johnson', department: 'Finance'
     }
  ]);

  useEffect(() => {
  
    const storedAttendance = JSON.parse(localStorage.getItem('att')) || [];
    const storedLeaves = JSON.parse(localStorage.getItem('lea')) || [];
    setAttendance(storedAttendance);
    setLeaves(storedLeaves);
  }, []);

  useEffect(() => {
    localStorage.setItem('att', JSON.stringify(attendance));
    localStorage.setItem('lea', JSON.stringify(leaves));
  }, [attendance, leaves]);

  return (
  

    
    
    
    <Router>
      <div className="container">
        <Header />
     
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <li><Link to="/apply-leave">Apply Leave</Link></li>
            <li><Link to="/leaves">Leave List</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard attendance={attendance} leaves={leaves} />} />
          <Route path="/attendance" element={<Attendance setAttendance={setAttendance} />} />
          <Route path="/apply-leave" element={<LeaveForm setLeaves={setLeaves} employees={employees} />} />

          <Route path="/leaves" element={<LeaveList leaves={leaves} setLeaves={setLeaves} employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;