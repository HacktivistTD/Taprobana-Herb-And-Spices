import React from 'react';

const products = [
  // Product objects as before
  {
    id: 1,
    name: 'Ceylon Cinnamon',
    href: '#',
    imageSrc: 'https://images.everydayhealth.com/images/diet-nutrition/all-about-cinnamon-alt-1440x810.jpg?sfvrsn=27b883d4_5',
    imageAlt: "Cinnamon",
  },
  {
    id: 2,
    name: 'Black pepper ',
    href: '#',
    imageSrc: 'https://assets.clevelandclinic.org/transform/65ddb397-7835-4b21-b30b-d123be3cb5c8/blackPepper-185067429-770x533-1_jpg',
    imageAlt: "Black pepper",
  },
  {
    id: 3,
    name: 'Turmeric',
    href: '#',
    imageSrc: 'https://images.moneycontrol.com/static-mcnews/2024/07/20240709071409_Turmeric.jpg?impolicy=website&width=770&height=431',
    imageAlt: "Turmeric",
  },
  {
    id: 3,
    name: 'Garcinia',
    href: '#',
    imageSrc: 'https://i.etsystatic.com/23555791/r/il/11a18b/3298037177/il_570xN.3298037177_la6n.jpg',
    imageAlt: "Garcinia",
  },
  {
    id: 3,
    name: 'Ginger',
    href: '#',
    imageSrc: 'https://www.garnierusa.com/-/media/project/loreal/brand-sites/garnier/usa/us/articles_new/strengthen-fragile-hair-with-ginger/garnier_article-header_ginger.jpg?rev=07e043606da3401aa15837849d8fef41&h=496&w=890&la=en&hash=C756272A42D8E095BF63E44BA3DE2897',
    imageAlt: "Ginger",
  },
  {
    id: 3,
    name: 'Curry Leaves',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2912YqvITNnWrMgkxNLpt2VkDBpL6PCrmkQ&usqp=CAU',
    imageAlt: "Curry Leaves",
  },
  {
    id: 3,
    name: 'Pandan Leaves',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbJzMGK77SmnoHtdKLl20E6FHdEItIAFWL7RN-c27_sJ5_eG4PC2zkaUM7r2T9YMu2l4&usqp=CAU',
    imageAlt: "Pandan Leaves",
  },
  {
    id: 3,
    name: 'Nut Meg',
    href: '#',
    imageSrc: 'https://www.amchur.co.uk/wp-content/uploads/2022/07/What-are-Nutmeg-Mace-and-its-benefits.jpg',
    imageAlt: "Nut Meg",
  },
  {
    id: 3,
    name: 'Cloves',
    href: '#',
    imageSrc: 'https://spicehillfarms.com/cdn/shop/products/6-_1.png?v=1681373731&width=1100',
    imageAlt: "Cloves",
  },
  {
    id: 3,
    name: 'Cumin Seeds',
    href: '#',
    imageSrc: 'https://static-01.daraz.lk/p/899724f6ff58a37949469a637d55484f.jpg',
    imageAlt: "Cumin Seeds",
  },
  {
    id: 3,
    name: 'Coriender Seeds',
    href: '#',
    imageSrc: 'https://cdn11.bigcommerce.com/s-ull9qh3m1o/images/stencil/1280x1280/products/1114/199808/COR003__40607.1618353717.jpg?c=2',
    imageAlt: "Coriender Seeds",
  },
  {
    id: 3,
    name: 'Mustard Seeds',
    href: '#',
    imageSrc: 'https://advicefromtheherblady.com/wp-content/uploads/2017/02/Mustard-Seed.jpg',
    imageAlt: "Seeds",
  },
  // Add remaining products here...
];

const Spice = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          Go Organic. Go Spice Up Your Life.
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
