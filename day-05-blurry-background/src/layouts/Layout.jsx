import React, {useState, useEffect } from 'react'; 

const Layout = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80';

  const [counter, setCounter] = useState(0);

  const timerId = setInterval(() => {
      
    setCounter(counter + 1);

  }, 30);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="main-section__container">
        <div 
          className="loading--background" 
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div 
          className="loading--counter"
        >
          {counter}%
        </div>
    </div>
  )
}

export default Layout
