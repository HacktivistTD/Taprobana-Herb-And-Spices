const products = [
  {
    id: 1,
    name: 'Moringa Leaves',
    href: '#',
    imageSrc: 'https://www.ahealthyleaf.com/wp-content/uploads/2015/10/2015-11-09-at-17-48-39.jpg',
    imageAlt: "Moringa Leaves",
   
  },
  {
    id: 1,
    name: 'Ranawara Flowers',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n9FeXDr4s4nOxFqhZh5-TEKfHaBeAMQqdA&usqp=CAU',
    imageAlt: "Front of men's Basic Tee in black.",
   
  },
  {
    id: 1,
    name: 'Thebu Leaves',
    href: '#',
    imageSrc: 'https://i.etsystatic.com/27476817/r/il/1e1806/3968608167/il_fullxfull.3968608167_lne3.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
   
  },
  {
    id: 1,
    name: 'Blue Lotus',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJDhtr8VDKeOnpMUSU321jasGJBHs2GGYsT7U0xbUu8r77Gi5vXkkAUoHQxDhp4jsyTw&usqp=CAU',
    imageAlt: "Front of men's Basic Tee in black.",
    
  },
  {
    id: 1,
    name: 'Lemongrass',
    href: '#',
    imageSrc: 'https://cdn11.bigcommerce.com/s-ti8ztxg4ry/images/stencil/1500x1500/products/3066/2246/lemon_grass_-003_SS-2022__75874.1654191092.jpg?c=1&imbypass=on',
    imageAlt: "Front of men's Basic Tee in black.",
  
  },
  {
    id: 1,
    name: 'Curry Leaves',
    href: '#',
    imageSrc: 'https://shemins.scdn2.secure.raxcdn.com/wp-content/uploads/2022/02/Shemins-Curry-Leaves.png',
    imageAlt: "Front of men's Basic Tee in black.",
  
  },
  {
    id: 1,
    name: 'Pandan Leaves',
    href: '#',
    imageSrc: 'https://post.healthline.com/wp-content/uploads/2020/10/pandan-1296x728-header.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    
  }, 
  {
    id: 1,
    name: 'Ashwagandha Roots',
    href: '#',
    imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312593922/BH/TS/DH/106380610/taar-ashwagandha-roots-500x500.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
   
  },

  


  {
    id: 1,
    name: 'Hibiscus Flowers',
    href: '#',
    imageSrc: 'https://www.planetnatural.com/wp-content/uploads/2024/02/Hibiscus.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
   
  },
  {
    id: 1,
    name: 'Dried Rose  Flowers',
    href: '#',
    imageSrc: 'https://elsieorganics.com/wp-content/uploads/2021/03/rose-buds-dried-rose-flower-buds.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
   
  },
  
  
  {
    id: 1,
    name: 'Dried Godapara',
    href: '#',
    imageSrc: 'https://www.ceylone.lk/wp-content/uploads/2022/07/119746014_782180462531962_1830692659578860099_n.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
   
  },


]

export default function Herb() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        Browse Our Herbs
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
