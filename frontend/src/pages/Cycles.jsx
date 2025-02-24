import React, { useEffect, useState } from 'react'
import axios from "axios"
import CyclesSection from '../conponents/CyclesSection';
const Cycle = () => {
const [Data, setData] = useState(null);

useEffect(() => {
  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v3/getCycle");
      setData(response.data.cycles);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  fetch();
  
  
}); 

  return (
    <div>
      <div className="b-h d-flex justify-content-center ">
          <h1>Cycle Section</h1>
          
      </div>
      {Data ? (
       <CyclesSection data={Data}/>
      ) : (
     <div>Loading....</div>
     )}
    </div>
  );
};

export default Cycle;


