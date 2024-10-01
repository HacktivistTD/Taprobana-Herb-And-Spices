import { useParams } from 'react-router-dom';
import { teas, spices,decor,tools,frock,blouse,trousers,slippers ,belt} from './Data'; // Assuming these are imported from data.jsx

export default function Subcategory() {
  const { subcategory } = useParams(); // Get the subcategory (teas, spices, etc.) from the URL
  
  const items = subcategory === 'teas' ? teas 
              : subcategory === 'spices' ? spices 
              :subcategory === 'home-decoration' ? decor
              :subcategory === 'garden-tools' ? tools
              :subcategory === 'frock' ? frock
              :subcategory === 'blouse' ? blouse
              :subcategory === 'trousers' ? trousers 
              :subcategory === 'slippers-heels' ? slippers 
              :subcategory === 'dog-belt' ? belt 
              : [];

  if (!items.length) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold">Subcategory not found</h1>
        <p>We couldn't find the subcategory you're looking for. Please try another one.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center capitalize">{subcategory.replace('-', ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {items.map((item) => (
          
          <div key={item.id} className="p-4 border rounded-md border rounded-md transition duration-300 transform hover:bg-gray-100 hover:shadow-lg hover:scale-105 cursor-pointer">
            <img src={item.imageSrc} alt={item.name} className="w-100  object-cover" />
            <h2 className="text-xl mt-2 text-center font-bold">{item.name}</h2>
            <p className="text-gray-500 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
