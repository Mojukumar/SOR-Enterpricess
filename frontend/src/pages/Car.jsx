import React, { useEffect, useState } from 'react'
import axios from "axios"
import CarsSection from '../conponents/CarsSection';

const Car = () => {
const [Data, setData] = useState(null);

useEffect(() => {
  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/getCar");
      console.log('Response data:', response.data);
      setData(response.data.cars);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  fetch();
  
  
}); 

  return (
    <div>
      <div className="b-h d-flex justify-content-center ">
          <h1>Car Section</h1>
          
      </div>
      {Data ? (
       <CarsSection data={Data}/>
      ) : (
     <div>Loading....</div>
     )}
    </div>
  );
};

export default Car;
