import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Details.css"


const DetailsPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showConfirmationModals, setShowConfirmationModals] = useState(false);
  const [rentDays, setRentDays] = useState(1);
  const totalAmount = item && item.rent ? rentDays * item.rent : 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cycleResponse = await axios.get(`http://localhost:5000/api/v3/getCycle/${itemId}`);
        const bikeResponse = await axios.get(`http://localhost:5000/api/v2/getBike/${itemId}`);
        const carResponse = await axios.get(`http://localhost:5000/api/v1/getCar/${itemId}`);

        console.log('Cycle Response:', cycleResponse.data);
        console.log('Bike Response:', bikeResponse.data);
        console.log('Car Response:', carResponse.data);

        if (cycleResponse.data && cycleResponse.data.cycles) {
          console.log('Setting item for cycle');
          setItem(cycleResponse.data.cycles);
        } else if (bikeResponse.data && bikeResponse.data.bikes) {
          console.log('Setting item for bike');
          setItem(bikeResponse.data.bikes);
        } else if (carResponse.data && carResponse.data.cars) {
          console.log('Setting item for car');
          setItem(carResponse.data.cars);
        } else {
          console.error('Item not found');
        }
      } catch (error) {
        console.error('Error fetching item:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  const handleBuyClick = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmOrder = async () => {
    try {
      // Perform actions to confirm the order
      // For demonstration purposes, just set the orderConfirmed state to true
      setOrderConfirmed(true);
      // Close the modal after confirming the order
      setShowConfirmationModal(false);
    } catch (error) {
      console.error('Error confirming order:', error.message);
      // Handle error scenarios, e.g., show an error message to the user
    }
  };

  const handleCancelOrder = () => {
    // Close the modal if the user cancels the order
    setShowConfirmationModal(false);
  };
  const handleRentClick = () => {
    setRentDays(1); // Reset rentDays when clicking on rent
    setShowConfirmationModals(true);
  };
  const handleConfirmRent = () => {
    try {
      // Perform actions to confirm the rent
      // For demonstration purposes, just set the orderConfirmed state to true
      setOrderConfirmed(true);
      // Close the modal after confirming the rent
      setShowConfirmationModals(false);
    } catch (error) {
      console.error('Error confirming rent:', error.message);
      // Handle error scenarios, e.g., show an error message to the user
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }
  

  if (orderConfirmed) {
    return <div class="cfd">
      <p class="app d-flex justify-content-around align-items-center">Congratulations</p>
       <h1 class="order d-flex justify-content-around align-items-center">Your order is booked!</h1>

       </div>;
  }
  


  return (
    <div className="details1 b-bg flex-wrap">
      
      <h1 className="details b-bg d-flex justify-content-around align-items-center flex-wrap">Your Selected Item</h1>
      <div class="dis-left">
      {item ? (
        <>
          <div className="img-m" style={{ width: "500px", height: "550px", borderRadius: "20px" }}>
            <div>
              <img
                style={{ width: "500px", height: "300px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                className="img-d img-fluid"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div>
              <h5 className="brand sec1">{item.brand}</h5>
            </div>
            <div>
              <h3 className="name d-flex justify-content-center align-items-center">{item.name}</h3>
            </div>
            <div className="d-flex justify-content-around align-items-center column">
              <h4 className="amount1">
                <h3>Price:</h3>
              </h4>
              <h4 className="amount1 ">
                <h3>Rent:</h3>
              </h4>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <h4 className="amount1 m-0 px-0">
                <p>Rs.{item.price}</p>
              </h4>
              <h4 className="amount1 m-0 px-0">
                <p>perDay: {item.rent}</p>
              </h4>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <button className="btn-b btn-primary" onClick={handleBuyClick}><h4>BUY</h4></button>
              <button className="btn-b btn-danger" onClick={handleRentClick}><h4>RENT</h4></button>
            </div>
        
            
          </div>
          <div class="dis-right">
          <form>
          {showConfirmationModal && (
            <div className="confirmation-modal">
              <h1>Confirm your order:</h1>
              <button class="b"onClick={handleConfirmOrder}>Yes</button>
              <button class="b1" onClick={handleCancelOrder}>No</button>
              
            </div>
            
          )}
          </form>
          </div>
          <div class="rig">
                 <form action="">
                 {rentDays > 0 && showConfirmationModals &&(
                  <div className="rig1">
                    <h1 class="num">Number Of Days To Rent:</h1>
                  <input class="num1"
                  type="number"
                  min="1"
                   value={rentDays}
                   onChange={(e) => setRentDays(e.target.value)}
                   

                  /><div>
                    <h3 class="total">Total Amount: Rs. {totalAmount}</h3>
                         <h3 class="total1">Conform To Buy:</h3>
                        <button className="y" onClick={handleConfirmRent}>Yes</button>
                        <button className="n" onClick={handleCancelOrder}>No</button>
                        </div>
                  </div>
                  )}
                </form>
                </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
       
          
    </div>
       
    </div>
    
  );
};

export default DetailsPage;