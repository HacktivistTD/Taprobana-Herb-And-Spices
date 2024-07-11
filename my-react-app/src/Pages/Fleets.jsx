
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'BUDGET CARS',
    href: '#',
    imageSrc: 'https://reviewsrilanka.com/wp-content/uploads/2023/08/micro_panda.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'MINI CARS',
    href: '#',
    imageSrc: 'https://www.financialexpress.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-12-at-11.44.21-AM-1.jpeg?w=480',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'HATCH BACK',
    href: '#',
    imageSrc: 'https://global.toyota/pages/news/images/2021/07/19/1330/20210719_04_01_s.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'SEDAN CARS',
    href: '#',
    imageSrc: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Toyota-Prius-2009-2016/1057/1563272072834/front-left-side-47.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'MINI VAN',
    href: '#',
    imageSrc: 'https://img.indianautosblog.com/2015/02/2015-Every-front-three-quarter-Japan.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'VAN',
    href: '#',
    imageSrc: 'https://demo.rapidgro.lk/transtravelslanka.com/wp-content/uploads/2018/06/7.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'MINI BUS',
    href: '#',
    imageSrc: 'https://holidaylankatours.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-18185838/images/24b23474cf4d4f5a82883bd1c079c208/httpswww.holidaylankatours.comtoyota-coaster.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  }, 
  {
    id: 1,
    name: 'BUS',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/c0/00/9a/c0009a1a97e080bb0460a441a93f468b.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function Fleets() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        Browse Our Limos
          </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 font-bold text-center">
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex  justify-center ">
                <div>
                  <h3 className="text-sm text-gray-700 ">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0 " />
                      {product.name}
                    </a>
                  </h3>
                 
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
