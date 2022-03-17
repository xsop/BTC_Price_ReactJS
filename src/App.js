import BTCLogo from './BTC_Logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import 'animate.css';


const Unit = () => {

  let [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/rates/bitcoin')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPrice(parseFloat(data.data.rateUsd).toFixed(2));
      });
      console.log("done");
  }, []);

  return(
    <>
      <div className='fullscreen-center'>
        <div className="container animate__animated animate__slideInDown">
              <img src={BTCLogo} alt="BTC Logo" className='ticker'/> 
              <h1>${price}</h1>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Unit />
  );
}

export default App;
