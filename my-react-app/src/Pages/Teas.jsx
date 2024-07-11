import React from 'react';

const products = [
  // Product objects as before
  {
    id: 1,
    name: 'Black Tea',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_EwGb0jE_YV0eMgih5Gny-XkKnVF5GST3OFStTnQKhARYbQon5YuL4CzecsLMsGynJ8&usqp=CAU',
    imageAlt: "Black Tea",
  },
  {
    id: 2,
    name: 'Green Tea ',
    href: '#',
    imageSrc: 'https://www.dermaessentia.com/cdn/shop/articles/Top_5_Green_Tea_Benefits_For_Skin_720x.jpg?v=1665384776',
    imageAlt: "Green Tea",
  },
  {
    id: 3,
    name: 'White Tea',
    href: '#',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5947d3d137c5812feb97ec13/1510942505085-1CRXJV3MA7V7JRAQGO8G/Silver+Needle.jpg?format=2500w',
    imageAlt: "White Tea",
  },
  {
    id: 3,
    name: 'Tipis',
    href: '#',
    imageSrc: 'https://palomateacompany.com/cdn/shop/products/3.gloden-tips-black-tea-collection-paloma-tea-company_800x.jpg?v=1535450767',
    imageAlt: "Tipis",
  },
  // Add remaining products here...
];

const Spice = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        Rare and Wonderful Organic Teas
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
                <div className="tmt-4 flex justify-center ">
                  <h2 className="text-m text-gray-900 fw-bolder">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
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

export default Spice;
