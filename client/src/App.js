import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import ParkingSpace from './Components/ParkingSpace';
import Wallet from './Components/Wallet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignUp/>
      <ParkingSpace/>
      <Wallet/>
      <Footer/>
    </div>
  );
}

export default App;
