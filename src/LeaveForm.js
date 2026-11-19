import React, { useState, useEffect } from 'react';

const LeaveForm = ({ setLeaves, employees }) => {
  const [empId2, setEmpId2] = useState('');
  const [empName2, setEmpName2] = useState('');
  const [department2, setDepartment2] = useState('');
  const [reason2, setReason2] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Load draft leave from localStorage (optional)
  
  useEffect(() => {
        const draft = JSON.parse(localStorage.getItem('draftLeave'));
    if (draft) {
      setEmpId2(draft.empId || '');
      setEmpName2(draft.empName || '');
      setDepartment2(draft.department || '');
      setReason2(draft.reason || '');
    }
  }, []);

  const resetForm = () => {
    setEmpId2('');
    setEmpName2('');
    setDepartment2('');
    setReason2('');
    setError('');
    setMessage('');
    localStorage.removeItem('draftLeave');
  };






  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = employees.find((emp) => emp.empId === empId2);
    

    if (!employee) {
      setError('Employee ID not found in company records.');
      return;
    }







    const newLeave = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      empId2,
      empName2,
      department2,
      reason2,
      status: 'Pending'
    };
  //  setLeaves((g)=>[newLeave])

    setLeaves((prev) => [...prev, newLeave]);
   
    
    resetForm();
    setMessage('Leave applied successfully!');
  };






  const handleSaveDraft = () => {
    const draft = {
      empId2,
      empName2,
      department2,
      reason2
    };

    localStorage.setItem('draftLeave', JSON.stringify(draft));
    setMessage('Leave saved as draft.');
  };

  return (
    <section>
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee ID"
          value={empId2}
          onChange={(e) => setEmpId2(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Employee Name"
          value={empName2}
          onChange={(e) => setEmpName2(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department2}
          onChange={(e) => setDepartment2(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Reason for Leave"
          value={reason2}
          onChange={(e) => setReason2(e.target.value)}
          required
        />
        <button type="submit">Apply Leave</button>
        <button type="button" onClick={handleSaveDraft} style={{ marginLeft: '10px' }}>
          Save as Draft
        </button>
      </form>
      

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </section>
  );
};

export default LeaveForm;