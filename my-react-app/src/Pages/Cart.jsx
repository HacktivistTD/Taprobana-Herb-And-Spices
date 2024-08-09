import React from 'react';

const Cart = ({ cartItems = [], handleRemove, handleQuantityChange }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#555' }}>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ flex: '2', marginRight: '20px' }}>
                <h4 style={{ margin: '0', color: '#333' }}>{item.title}</h4>
                <p style={{ margin: '0', color: '#777' }}>{item.description}</p>
                <p style={{ margin: '5px 0', color: '#555' }}>Price: ${item.price.toFixed(2)}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  min="1"
                  style={{ width: '60px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px', textAlign: 'center' }}
                />
                <button onClick={() => handleRemove(index)} style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <h3 style={{ margin: '0', color: '#333' }}>Total: ${getTotalPrice()}</h3>
            <button style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#28a745', color: 'white', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
