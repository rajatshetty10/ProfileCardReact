import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(Number(localStorage.getItem('fireCount')));
  localStorage.setItem('fireCount', count);

  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    localStorage.setItem('fireCount', count);
  };

  return (
    <div className="counter">
      <div className="fire">
        <i className="fas fa-fire fa-3x" onClick={increment}></i>
        <h4 id="fire-text">{count}</h4>
      </div>
    </div>
  );
};

export default Counter;
