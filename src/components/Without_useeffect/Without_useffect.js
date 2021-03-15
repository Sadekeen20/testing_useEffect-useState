import React from 'react';

const Without_useffect = () => {
   //declare a hook
  const [cartItems,setcartItems] =useState([])
  return (
    <div className="App">
      <p>Items in your cart:{cartItems.toString()}</p>
      <button onClick={()=>{
        setcartItems([...cartItems,'apple'])
      }}>Add to cart</button>
    </div>
    );
};

export default Without_useffect;