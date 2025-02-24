import React, { useState } from 'react'
import "./Add.css";
import axios from "axios";

const Add = () => {
  const [Data, setData] = useState({brand:"",name:"",image:"",price:"",rent:""});
  const change = (e) => {
    const {name, value} = e.target;
    setData({...Data, [name]: value})
  }
  const submit1 = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/v1/add", Data)
      .then((res) => alert(res.data.message));
    setData({ brand: "", name: "", image: "", price: "", rent: "" });
  };
  const submit2 = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/v2/add1", Data)
      .then((res) => alert(res.data.message));
    setData({ brand: "", name: "", image: "", price: "", rent: "" });
  };
  const submit3 = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/v3/add2", Data)
      .then((res) => alert(res.data.message));
    setData({ brand: "", name: "", image: "", price: "", rent: "" });
  };
  console.log(Data);
  return (
    <div class="add-head">
      <div class="add-left">
      <img class="add-1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-GuwURUb7ipD1fvHajo0gyqMuYt2DuNExg&usqp=CAU"alt="loading..." />
      <img class="add-1"src="https://wallpapers.com/images/hd/classic-350-royal-enfield-hd-2thkxmjumo105p78.jpg"alt="loading..." />
      <img class="add-1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ41UyWtgJ7vbffHfrfn5gIzAu0ppZb6qjKg&usqp=CAU"alt="loading..." />
      </div>
      <div class="add-right">
      <form>
      <div class="form-group colomn">
       <label for="brand" class="col-sm-2 col-form-label col-form-label-lg">
        <h2 class="form">Brand:~</h2>
       </label>
      <input type="text" class="txt form-control form-control-lg col-sm-20" id="brand" placeholder="Enter the brand" name="brand" value={Data.brand} onChange={change}/>
      </div>

    <div class="form-group colomn">
      <label for="name" class="col-sm-2 col-form-label col-form-label-lg">
        <h2 class="form">Name:~</h2>
      </label>
      <input type="text" class="txt form-control form-control-lg col-sm-20" id="name" placeholder="Enter the name" name="name" value={Data.name} onChange={change} />
    </div>

    <div class="form-group colomn">
      <label for="name" class="col-sm-2 col-form-label col-form-label-lg">
        <h2 class="form">Image:~</h2>
      </label>
      <input type="text" class="txt form-control form-control-lg col-sm-20" id="name" placeholder="Enter the URL of image" name="image" value={Data.image} onChange={change}/>
    </div>

    <div class="form-group colomn">
      <label for="price" class="col-sm-2 col-form-label col-form-label-lg">
        <h2 class="form">Price:~</h2>
      </label>
      <input type="text" class="txt form-control form-control-lg col-sm-20" id="price" placeholder="Enter the price" name="price" value={Data.price} onChange={change} />
    </div>

    <div class="form-group colomn">
      <label for="rent" class="col-sm-2 col-form-label col-form-label-lg">
        <h2 class="form">Rent:~</h2>
      </label>
      <input type="text" class="txt form-control form-control-lg col-sm-20" id="rent" placeholder="Enter the rent" name="rent" value={Data.rent} onChange={change} />
    </div>
    <div class="sub  d-flex justify-content-around align-items-center"> 
    <button class="btn btn-primary " type="submit" onClick={submit3}>Submit for Cycle</button>
    <button class="btn btn-primary " type="submit" onClick={submit2}>Submit for Bike</button>
    <button class="btn btn-primary " type="submit" onClick={submit1}>Submit for Car</button>
    </div> 
  </form>
</div>

</div>

  )
  
}

export default Add
