import { useParams, useNavigate } from 'react-router-dom';

// Fashion Image Import Section
import frock from '../Images/Fashion/frock.jpg';
import heels from '../Images/Fashion/heels.jpg';
import trousers from '../Images/Fashion/trousers.jpg';
import blouse from '../Images/Fashion/blouse.jpg';

// Home and Garden Image Import Section
import gardening from '../Images/Home and Garden/gardening.jpg';
import tea from '../Images/Home and Garden/tea.jpg';
import herb from '../Images/Home and Garden/herb.jpg';
import decor from '../Images/Home and Garden/decor.jpg';

// Pet Supplies Image Import Section
import belt from '../Images/Pet/belt.jpg';
import toy from '../Images/Pet/toy.jpg';
import food from '../Images/Pet/food.jpg';
import medicine from '../Images/Pet/medicine.jpg';

// Pet Supply Section
const categories = {
  'pet-supplies': [
    { name: 'Pet Food', description: 'Healthy food for pets', imageSrc: food },
    { name: 'Pet Medicine', description: 'Medicine for pets', imageSrc: medicine },
    { name: 'Pet Toys', description: 'Fun toys for pets', imageSrc: toy },
    { name: 'Dog Belt', description: 'Durable and comfortable belts designed for walking and controlling your dog.', imageSrc: belt },
  ],

  // Home and Garden
  'home-and-garden': [
    { name: 'Garden Tools', description: 'Tools for home gardening', imageSrc: gardening },
    { name: 'Tea and Infusion', description: 'A variety of teas and herbal infusions for relaxation and wellness.', imageSrc: tea, link: 'tea-and-infusion' },
    { name: 'Herbs and Spices', description: 'A collection of aromatic herbs and spices to enhance flavor and health benefits in cooking.', imageSrc: herb },
    { name: 'Home Decor', description: 'Beautiful home decor items', imageSrc: decor, link: 'home-decor' },
  ],
  
  // Fashion Section
  'fashion': [
    { name: 'Frock', description: 'Stylish and comfortable dresses suitable for various occasions.', imageSrc: frock },
    { name: 'Blouse', description: 'Elegant and versatile tops perfect for casual or formal wear.', imageSrc: blouse },
    { name: 'Trousers', description: 'Comfortable and stylish pants suitable for both casual and formal occasions.', imageSrc: trousers },
    { name: 'Slippers and Heels', description: 'Comfortable slippers for everyday wear and stylish heels for special occasions.', imageSrc: heels },
  ],
};

export default function Cat() {
  const { category } = useParams();
  const navigate = useNavigate(); // To handle navigation
  const items = categories[category] || [];

  if (!items.length) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <p>We couldn't find the category you're looking for. Please try another one.</p>
      </div>
    );
  }

  const handleItemClick = (item) => {
    if (item.link) {
      navigate(`/category/${item.link}`);
    }
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-center capitalize">{category.replace('-', ' ')}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="p-4 border rounded-md transition duration-300 transform hover:bg-gray-100 hover:shadow-lg hover:scale-105 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <img src={item.imageSrc} alt={item.name} className="w-full h-75 object-cover" />
              <h2 className="text-xl mt-2 text-center font-bold">{item.name.replace('-', ' ')}</h2>
              <p className="text-gray-500 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
