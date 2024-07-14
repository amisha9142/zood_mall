import React, { useEffect, useState } from 'react';


const RealTimeButtons = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
  
    <div style={{height:"100px",width:"30px",display:"flex",paddingLeft:"20px"}}>
      <button style={{margin:"20px",borderRadius:"5px"}}><b>{time.hours}</b> Hours</button>
      <button style={{margin:"20px",borderRadius:"5px"}}><b>{time.minutes} </b>Minutes</button>
      <button style={{margin:"20px",borderRadius:"5px"}}><b>{time.seconds}</b> Seconds</button>
     
    </div>
    <h3 style={{color:"white",paddingLeft:"35px",marginTop:"20px"}}>View More</h3>
    </>
  );
};

export default RealTimeButtons;
