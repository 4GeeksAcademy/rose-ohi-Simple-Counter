import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';

// FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';

function SimpleCounter({ digOne, digTwo, digThree, digFour }) {
  return (
    <div className="pgCounter container"> 
      <div className="cl-icon "> <i className="fa-solid fa-clock-rotate-left"></i>
      </div> 
      <div className="one">{digOne}</div>
      <div className="two">{digTwo}</div>
      <div className="three">{digThree}</div>
      <div className="four">{digFour}</div>
    </div>
  );
}

SimpleCounter.propTypes = { 
  digOne: PropTypes.number,
  digTwo: PropTypes.number,
  digThree: PropTypes.number,
  digFour: PropTypes.number
};

function Count() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const one = Math.floor(counter / 1000) % 10;
  const two = Math.floor(counter / 100) % 10;
  const three = Math.floor(counter / 10) % 10;
  const four = Math.floor(counter / 1) % 10;

  return <SimpleCounter digOne={one} digTwo={two} digThree={three} digFour={four} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Count />
  </React.StrictMode>
);
