import React, {useState, useEffect } from 'react'; 

const Layout = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80';

  const [counter, setCounter] = useState(0);

  const interval = 30;

  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  useEffect(() => {

    const timerId = setInterval(() => {
      setCounter(count => {
        if(count <= 99) {
          return count + 1; 
        }
        else {
          clearInterval(timerId); 
          return count;
        }
      })
    }, interval);

    return(() => {
      clearInterval(timerId);
    });

  }, [])

  return (
    <div className="main-section__container">
        <div 
          className="loading--background" 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: `blur(${scale(counter, 0, 100, 30, 0)}px)`
          }}
        ></div>
        <div 
          className="loading--counter"
          style={{
            opacity: `${scale(counter, 0, 100, 1, 0)}`
          }}
        >
          {counter}%
        </div>
    </div>
  )
}

export default Layout
