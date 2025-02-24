import React, { useEffect, useState } from 'react'
import axios from "axios"
import BikesSection from '../conponents/BikesSection';
const Bike = () => {
const [Data, setData] = useState(null);

useEffect(() => {
  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v2/getBike");
      setData(response.data.bikes);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  fetch();
  
  
}); 

  return (
    <div>
      <div className="b-h d-flex justify-content-center ">
          <h1>Bike Section</h1>
          
      </div>
      {Data ? (
       <BikesSection data={Data}/>
      ) : (
     <div>Loading....</div>
     )}
    </div>
  );
};

export default Bike;
