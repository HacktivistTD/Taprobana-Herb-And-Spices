import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Data for each product in various categories
const productsData = {
  'tea-and-infusion': [
    {
      id: 1,
      name: 'Black Tea',
      href: '/black-tea',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_EwGb0jE_YV0eMgih5Gny-XkKnVF5GST3OFStTnQKhARYbQon5YuL4CzecsLMsGynJ8&usqp=CAU',
      imageAlt: 'Black Tea',
    },
    {
      id: 2,
      name: 'Green Tea',
      href: '/green-tea',
      imageSrc: 'https://www.dermaessentia.com/cdn/shop/articles/Top_5_Green_Tea_Benefits_For_Skin_720x.jpg?v=1665384776',
      imageAlt: 'Green Tea',
    },
    {
      id: 3,
      name: 'White Tea',
      href: '/white-tea',
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/5947d3d137c5812feb97ec13/1510942505085-1CRXJV3MA7V7JRAQGO8G/Silver+Needle.jpg?format=2500w',
      imageAlt: 'White Tea',
    },
    {
      id: 4,
      name: 'Tipis',
      href: '/tipis',
      imageSrc: 'https://palomateacompany.com/cdn/shop/products/3.gloden-tips-black-tea-collection-paloma-tea-company_800x.jpg?v=1535450767',
      imageAlt: 'Tipis',
    },
  ],
  // Home Decor Section (Add valid image URLs or placeholders)
  'home-decor': [
    {
      id: 1,
      name: 'Wall Art',
      href: '/wall-art',
      imageSrc: 'https://example.com/wall-art.jpg', // Replace with a valid URL
      imageAlt: 'Wall Art',
    },
    // Other home decor items...
  ],
};

const View = () => {
  const { category } = useParams();

  // Get products based on the selected category
  const products = productsData[category] || [];

  if (!products.length) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-center">Category not found</h1>
        <p className="text-center">Please choose a valid category.</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center capitalize">
          {category.replace('-', ' ')}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="mt-4 flex justify-center">
                  <h2 className="text-m text-gray-900 font-bold">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View;
