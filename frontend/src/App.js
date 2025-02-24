import './App.css';
import Navbar from './conponents/Navbar';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Select from './pages/Select';
import Add from './pages/Add';
import Contact from './pages/Contact';
import Cycles from './pages/Cycles';
import Bike from './pages/Bike';
import Car from './pages/Car';
import DetailsPage from './pages/Detailspage';
// Make sure the import is correct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/add" element={<Add />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cycles" element={<Cycles />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/car" element={<Car />} />
        <Route path="/details/:itemId" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
