import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BikesSection = ({ data }) => {
  
    const [bikeData, setBikeData] = useState(data);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [updatedItem, setUpdatedItem] = useState({});
  
    const handleUpdate = (id) => {
      // Open the update modal
      setUpdateModalOpen(true);
  
      // Find the bike to be updated based on its ID
      const bikeToUpdate = bikeData.find(item => item._id === id);
      setUpdatedItem(bikeToUpdate);
    };
  
    const handleUpdateSubmit = async (e) => {
      e.preventDefault(); // prevent the default form submission
  
      try {
        // Make an API request to update the bike with the new information
        await axios.put(`http://localhost:5000/api/v2/updateBike/${updatedItem._id}`, updatedItem);
        console.log('Update request successful');
        alert('Bike updated successfully');
  
        // Close the update modal
        setUpdateModalOpen(false);
  
        // Optionally, you can fetch the updated data from the server and update the state
      } catch (error) {
        console.error('Error updating bike:', error.message);
        console.error('Response data:', error.response ? error.response.data : 'N/A');
        console.error('Response status:', error.response ? error.response.status : 'N/A');
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      // Update the updatedItem state with the new input values
      setUpdatedItem((prevItem) => ({ ...prevItem, [name]: value }));
    };
  
    const handleDelete = async (id) => {
      console.log('Deleting bike with ID:', id);
  
      // Optimistically update UI
      setBikeData((prevData) => prevData.filter(item => item._id !== id));
  
      try {
        await axios.delete(`http://localhost:5000/api/v2/deleteBike/${id}`);
        console.log('Delete request successful');
        alert('Bike deleted successfully');
      } catch (error) {
        console.error('Error deleting bike:', error.message);
        console.error('Response data:', error.response ? error.response.data : 'N/A');
        console.error('Response status:', error.response ? error.response.status : 'N/A');
  
        // Revert UI update in case of failure
        setBikeData((prevData) => [...prevData, ...bikeData.filter(item => item._id === id)]);
      }
    };
    const handleSelect = (id) => {
      // Redirect to the new page with the selected item's ID in the route
      window.location.href = `/details/${id}`;
    };
  
  return (
    <div className="b-bg d-flex justify-content-around align-items-center flex-wrap ">
      {data && data.map((item, index) => (
        <div className="img-c" style={{width:"300px",height:"580px",borderRadius:"20px"}} key={index}>

          <div>
            <img style={{width:"300px", height:"300px",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}
              className="img-d img-fluid"
              src={item.image} alt="/" />
          </div>

          <div>
            <h5 className="brand sec1">{item.brand}</h5>
          </div>

          <div>
            <h3 className="name d-flex justify-content-center align-items-center">{item.name}</h3>
          </div>

          <div className="d-flex justify-content-around align-items-center column">
            <h4 className="amount m-0 px-1"><p>Price:</p></h4>
            <h4 className="amount m-0 px-1"><p>Rent:</p></h4>
          </div>

          <div className="d-flex justify-content-around align-items-center" >
            <h4 className="amount m-0 px-0"><p>Rs.{item.price}</p></h4>
            <h4 className="amount m-0 px-0"><p>perDay:{item.rent}</p></h4>
          </div>
          
          <div className="d-flex justify-content-center align-items-center">
          <button class="btn-sel" onClick={() => handleSelect(item._id)}>Select</button>
          </div>

          <div className="d-flex justify-content-around align-items-center">
            <button className="btn-a btn-primary" onClick={() => handleUpdate(item._id)}><h4>Update</h4></button>
            <button className="btn-a btn-danger" onClick={() => handleDelete(item._id)}><h4>Delete</h4></button>
          </div>
        </div>
      ))}
      <div>
      {isUpdateModalOpen && (
        <div className="update-modal">
          <h2>Update Bike:</h2>
          <form onSubmit={handleUpdateSubmit}>
            <label class="update">
              Brand:
              <input
                type="text" class="txt"
                name="brand"
                value={updatedItem.brand || ''}
                onChange={handleInputChange}
              />
            </label>

            <label class="update">
              Name:
              <input
                type="text" class="txt"
                name="name"
                value={updatedItem.name || ''}
                onChange={handleInputChange}
              />
            </label>
            <label class="update">
              Image:
              <input
                type="text" class="txt"
                name="image"
                value={updatedItem.image || ''}
                onChange={handleInputChange}
              />
            </label>
            <label class="update">
              Price:
              <input
                type="text" class="txt"
                name="price"
                value={updatedItem.price || ''}
                onChange={handleInputChange}
              />
            </label>
            <label class="update">
              Rent:
              <input
                type="text" class="txt"
                name="rent"
                value={updatedItem.rent || ''}
                onChange={handleInputChange}
              />
            </label>

           

            <button class="btnupdate" type="submit">Update</button>
          
          <button class="btnupdate" onClick={() => setUpdateModalOpen(false)}>Close</button>
          </form>
        </div>
      )}
      <div className="c-button1">
        <button className="c-b">
          <Link to="/cycles">Cycles</Link>
        </button>
        <button className="c-b">
          <Link to="/car">Car</Link>
        </button>
      </div>
    
    </div>
    </div>
  );
};

export default BikesSection;
