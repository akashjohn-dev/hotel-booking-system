import React from 'react';
import { data } from 'react-router-dom';

const Attendance = ({ setAttendance }) => {

  const handleClockIn = () => {
    const today = new Date().toLocaleDateString();
    
   
   // setAttendance((h)=>[...h,{g:today}])
   //setAttendance((h)=>[...h,{date:today}])

    setAttendance((prev) => [...prev,{ date: today }]);
    
    
  };
  

  return (
    <section>
      <h2>Mark Attendance</h2>
      <button onClick={()=>handleClockIn()}>Clock In</button>
    </section>
  );
};

export default Attendance;