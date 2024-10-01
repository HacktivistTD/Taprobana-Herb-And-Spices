import React, { useState } from 'react';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState('/path-to-image1.jpg');
  const [selectedColor, setSelectedColor] = useState('black');

  const product = {
    title: 'Zip Tote Basket',
    price: 140,
    description:
      'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
    images: [
      '/path-to-image1.jpg',
      '/path-to-image2.jpg',
      '/path-to-image3.jpg',
      '/path-to-image4.jpg',
    ],
    colors: ['black', 'white', 'gray'],
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Left Section: Image Gallery */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <img
          src={selectedImage}
          alt="Product"
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="flex gap-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 ${
                selectedImage === image ? 'border-indigo-500' : 'border-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl font-semibold mt-2">${product.price}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xl">⭐⭐⭐⭐</span>
        </div>
        <p className="mt-4 text-gray-600">{product.description}</p>

        {/* Color Selector */}
        <div className="mt-6">
          <h4 className="font-medium">Color</h4>
          <div className="flex items-center gap-4 mt-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border-2 ${
                  selectedColor === color ? 'border-indigo-500' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Add to Bag Button */}
        <button className="mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700">
          Add to bag
        </button>

        {/* Accordion Sections */}
        <div className="mt-8 space-y-4">
          <Accordion title="Features">
            Durable canvas construction, convertible straps.
          </Accordion>
          <Accordion title="Care">Wipe clean with a damp cloth.</Accordion>
          <Accordion title="Shipping">Free standard shipping on all orders.</Accordion>
          <Accordion title="Returns">30-day return policy.</Accordion>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-2 text-lg font-medium border-b-2"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{children}</div>}
    </div>
  );
};

export default Product;
