import React from 'react';

const LeaveList = ({ leaves, setLeaves, employees }) => {

 
  const handleStatusChange = (id, newStatus) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id ? { ...leave, status: newStatus } : leave
    );
    setLeaves(updatedLeaves);
  };

  //handleStatusChange("reject")

  const isValidEmployee = (empId) =>
    employees.some((emp) =>emp.empId === empId);
  

  return (
    <section>
      <h2>Leave Applications</h2>
      {leaves.length === 0 ? (
        <p>No leave applications found.</p>
      ) : (
        <ul>
          {leaves.map((leave) =>
            isValidEmployee(leave.empId) ? (
              <li key={leave.id}>
                <strong>ID:</strong> {leave.empId} |
                <strong> Name:</strong> {leave.empName} |
                <strong> Dept:</strong> {leave.department}<br />
                <strong>Date:</strong> {leave.date} |
                <strong> Reason:</strong> {leave.reason} |
                <strong> Status:</strong> {leave.status}
                <br />
                {leave.status === 'Pending' && (
                  <>
                    <button onClick={() => handleStatusChange(leave.id, 'Approved')}>OK</button>
                    <button onClick={() => handleStatusChange(leave.id, 'Rejected')} style={{ marginLeft: '10px' }}>Cancel</button>
                  </>
                )}
              </li>
            ) : null
          )}
        </ul>
      )}
    </section>
  );
};

export default LeaveList;