import React from 'react';

const products = [
  {
    id: 1,
    name: 'OP-A',
    href: '#',
    imageSrc: 'https://athulatea.lk/wp-content/uploads/2021/02/Black-Tea-OP1-athulatea.jpg',
    imageAlt: "Black Tea",
  },
  {
    id: 2,
    name: 'OP ',
    href: '#',
    imageSrc: 'https://www.eminenttea.com/wp-content/uploads/2021/06/EM0050T.jpg',
    imageAlt: "Green Tea",
  },
  {
    id: 3,
    name: 'OP 1',
    href: '#',
    imageSrc: 'https://www.myteaparadise.co.uk/user/products/large/Ceylon%20Sarnia%20Plaiderie.jpg  ',
    imageAlt: "White Tea",
  },
  {
    id: 4,
    name: 'Pekoe',
    href: '#',
    imageSrc: 'https://theceylontea.com/wp-content/uploads/2014/09/PEKOE-600x600.jpg',
    imageAlt: "Tipis",
  },

  {
    id: 4,
    name: 'BOP',
    href: '#',
    imageSrc: 'https://img.tradeford.com/pimages/l/7/428307.jpg',
    imageAlt: "Tipis",
  },
  {
    id: 4,
    name: 'BOP-1 ',
    href: '#',
    imageSrc: 'https://teasrilanka.org/images/tea-grade/fbop1.jpg',
    imageAlt: "Tipis",
  },

  {
    id: 4,
    name: 'BOPF',
    href: '#',
    imageSrc: 'https://lumbiniteavalley.com/cdn/shop/products/ceylon-malty-black-1_grande.jpg?v=1600347304',
    imageAlt: "Tipis",
  },

  {
    id: 4,
    name: 'FBOPF',
    href: '#',
    imageSrc: 'https://teasrilanka.org/images/tea-grade/fbopf.jpg',
    imageAlt: "Tipis",
  },


  {
    id: 4,
    name: 'BOP',
    href: '#',
    imageSrc: 'https://palomateacompany.com/cdn/shop/products/3.gloden-tips-black-tea-collection-paloma-tea-company_800x.jpg?v=1535450767',
    imageAlt: "Tipis",
  },

  {
    id: 4,
    name: 'BOP sp',
    href: '#',
    imageSrc: 'https://theceylontea.com/wp-content/uploads/FFexsp.jpg',
    imageAlt: "Tipis",
  },

  {
    id: 4,
    name: 'BOP  Esp',
    href: '#',
    imageSrc: 'https://palomateacompany.com/cdn/shop/products/3.gloden-tips-black-tea-collection-paloma-tea-company_800x.jpg?v=1535450767',
    imageAlt: "Tipis",
  },

  {
    id: 4,
    name: 'PF',
    href: '#',
    imageSrc: 'https://palomateacompany.com/cdn/shop/products/3.gloden-tips-black-tea-collection-paloma-tea-company_800x.jpg?v=1535450767',
    imageAlt: "Tipis",
  },
  {
    id: 4,
    name: 'PF 1',
    href: '#',
    imageSrc: 'https://palomateacompany.com/cdn/shop/products/3.gloden-tips-black-tea-collection-paloma-tea-company_800x.jpg?v=1535450767',
    imageAlt: "Tipis",
  },
  {
    id: 4,
    name: 'Dust',
    href: '#',
    imageSrc: 'https://static.vecteezy.com/system/resources/thumbnails/003/814/179/small/black-tea-powder-or-dry-dust-tea-powder-chai-patti-isolated-in-glass-bowl-with-cardamom-clove-and-ginger-photo.JPG',
    imageAlt: "Tipis",
  },
  // Add remaining products here...
];

const Black = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
         Choose Your Floavor
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

export default Black;
