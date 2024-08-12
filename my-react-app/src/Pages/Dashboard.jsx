import React, { useState } from 'react';
import { db, storage } from './firebase'; // Import storage if using Firebase Storage
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: ''
  });

  const [quantities, setQuantities] = useState([{ quantity: '', price: '', qty: '' }]);
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleQuantityChange = (index, e) => {
    const { name, value } = e.target;
    const newQuantities = [...quantities];
    newQuantities[index][name] = value;
    setQuantities(newQuantities);
  };

  const addQuantityRow = () => {
    setQuantities([...quantities, { quantity: '', price: '', qty: '' }]);
  };

  const removeQuantityRow = (index) => {
    const newQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(newQuantities);
  };

  const uploadImages = async () => {
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const imageRef = ref(storage, `products/${image.name}`);
        const snapshot = await uploadBytes(imageRef, image);
        return getDownloadURL(snapshot.ref);
      })
    );
    return imageUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrls = await uploadImages();
      await addDoc(collection(db, 'products'), {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        quantities: quantities.map(q => ({
          quantity: q.quantity,
          price: q.price,
          qty: q.qty
        })),
        images: imageUrls
      });
      toastr.success('Product added successfully!');
      setFormData({
        title: '',
        category: '',
        description: ''
      });
      setQuantities([{ quantity: '', price: '', qty: '' }]);
      setImages([]);
    } catch (error) {
      toastr.error('Error adding product: ' + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', color: '#555', fontWeight: 'bold' }}>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', color: '#555', fontWeight: 'bold' }}>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', color: '#555', fontWeight: 'bold' }}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', height: '100px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', color: '#555', fontWeight: 'bold' }}>Images:</label>
          <input
            type="file"
            onChange={handleImageChange}
            multiple
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', color: '#555', fontWeight: 'bold' }}>Quantity-Price-Qty Pairs:</label>
          {quantities.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity (e.g., 25g)"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e)}
                required
                style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
              />
              <input
                type="number"
                name="price"
                placeholder="Price (e.g., 20)"
                value={item.price}
                onChange={(e) => handleQuantityChange(index, e)}
                required
                style={{ flex: '1', marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
              />
              <input
                type="number"
                name="qty"
                placeholder="Qty (e.g., 5)"
                value={item.qty}
                onChange={(e) => handleQuantityChange(index, e)}
                required
                style={{ flex: '1', marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
              />
              <button type="button" onClick={() => removeQuantityRow(index)} style={{ marginLeft: '10px', padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addQuantityRow} style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
            Add Quantity-Price-Qty Pair
          </button>
        </div>
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#28a745', color: 'white', fontSize: '16px', cursor: 'pointer' }}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
