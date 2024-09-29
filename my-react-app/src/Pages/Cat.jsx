import { useParams, useNavigate } from 'react-router-dom';

// Fashion Image Import Section
import frock from '../Images/Fashion/frock.jpg';
import heel from '../Images/Fashion/heel.png';
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

// Define teas and spices separately for subcategories


// Category data
const categories = {
  'pet-supplies': [
    { name: 'Pet Food', description: 'Healthy food for pets', imageSrc: food },
    { name: 'Pet Medicine', description: 'Medicine for pets', imageSrc: medicine },
    { name: 'Pet Toys', description: 'Fun toys for pets', imageSrc: toy },
    { name: 'Dog Belt', description: 'Durable belts', imageSrc: belt ,link:'dog-belt' },
  ],
  'home-and-garden': [
    { name: 'Garden Tools', description: 'Tools for gardening', imageSrc: gardening , link:'garden-tools' },
    { name: 'Tea and Infusion', description: 'Variety of teas', imageSrc: tea, link: 'teas' },
    { name: 'Herbs and Spices', description: 'Aromatic herbs', imageSrc: herb, link: 'spices' },
    { name: 'Home Decor', description: 'Beautiful decor', imageSrc: decor, link: 'home-decoration' },
  ],
  'fashion': [
    { name: 'Frock', description: 'Stylish dresses', imageSrc: frock  , link:'frock'},
    { name: 'Blouse', description: 'Elegant tops', imageSrc: blouse , link:'blouse'},
    { name: 'Trousers', description: 'Comfortable pants', imageSrc: trousers , link:'trousers'},
    { name: 'Slippers and Heels', description: 'Stylish footwear', imageSrc: heel , link:'slippers-heels'},
  ],
};

export default function Cat() {
  const { category } = useParams();
  const navigate = useNavigate();
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
      navigate(`/Subcategory/${item.link}`); 
    }
  };

  return (
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
  );
}
