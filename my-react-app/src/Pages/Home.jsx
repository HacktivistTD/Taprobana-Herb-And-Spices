import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

    
const posts = [
  {
    id: 1,
    title: 'Professional demeanor',
    href: '#',
    description:
    "Appreciated the professional demeanor of the driver. They were knowledgeable about the area and offered helpful suggestions.",
    date: 'Mar 16, 2024',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Amelia',
      imageUrl:
        'https://images.yen.com.gh/images/b6da582371ad4209.jpg',
    },
  },
  {
    id: 1,
    title: 'Cleanliness',
    href: '#',
    description:
    "I was impressed by the cleanliness of the vehicle. It was well-maintained and provided a comfortable ride.",
    date: 'Mar 16, 2024',
    datetime: '2020-03-16',
   
    author: {
      name: 'Sebestian',
     
      imageUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cc521c6-4b33-40a6-8654-b72a740c19d5/dfy5pfu-0da7a697-aff8-4f58-bb6c-f2dac2c6efce.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjYzUyMWM2LTRiMzMtNDBhNi04NjU0LWI3MmE3NDBjMTlkNVwvZGZ5NXBmdS0wZGE3YTY5Ny1hZmY4LTRmNTgtYmI2Yy1mMmRhYzJjNmVmY2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IIvOM0ljEm24RgAio1otzR9otKynN3eH0LhGfGQl55E',
    },
  },
  {
    id: 1,
    title: 'Prioritizing safety',
    href: '#',
    description:
    "Thank you for prioritizing safety measures. I noticed the driver followed all traffic rules and maintained a clean and sanitized environment inside the cab.",
    date: 'Apri 16, 2024',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Diana',
      
      imageUrl:
        'https://dailynews.co.tz/wp-content/uploads/2023/07/Jodie-Comer.jpg',
    },
  },
  
  // More posts...
]

const features = [
  {
    name: 'Airport Transfers',
    description:
      'Take the stress out of arrival with pre-booked, reliable transport directly from the airport to your hotel.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Sightseeing Tours:',
    description:
      'Explore Sri Lankas hidden gems and iconic landmarks at your own pace with our comfortable cabs and experienced drivers.',
    icon: LockClosedIcon,
  },
  {
    name: 'City Tours:',
    description:
      'Discover the vibrant energy and cultural richness of Sri Lankas cities with our knowledgeable drivers.',
    icon: ArrowPathIcon,
  },
  {
    name: ' Day Trips: ',
    description:
      'Plan hassle-free day trips to nearby attractions with our comfortable transportation.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Multi-day Tours:',
    description:
      'Explore Sri Lanka in style with our multi-day taxi tours tailored to your itinerary.',
    icon: ArrowPathIcon, 
  },
  {
    name: ' Shopping Sprees: ',
    description:
      'Relax and enjoy your shopping experience in Sri Lanka.Well take care of navigating the bustling streets and ensuring a safe return to your hotel with all your purchases.',
    icon: FingerPrintIcon,
  },
]

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '1 million +' },
  { id: 2, name: 'Drivers working with us', value: '1000 +' },
  { id: 3, name: 'New users annually', value: '46,000 +' },
]




export default function Home() {
  return (
   <div className="main">
        
<div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             WE'RE ALWAYS HERE FOR YOU.
            </h1>
            <p className="mt-4 text-xl text-gray-500 font-bold">
            Your TAPROBANA Journey Starts Here
           Experience Sri Lanka beyond the guidebook. TAPROBANA Cab Service whisks you away on a personalized journey, 
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://media.timeout.com/images/101900107/image.jpg"
                          alt="safari"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/8a/96/f1/two-male-elephants-just.jpg?w=500&h=500&s=1"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://worldwidetravel.tips/wp-content/uploads/2020/01/Peacock-Sri-Lanka-Open.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.laweekly.com/wp-content/uploads/2023/05/Rich-marine-diversity-off-the-coast-in-Sri-Lanka.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.rentatourguideinsrilanka.com/wp-content/uploads/2018/10/Wildlife-Sri-Lanka.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1251179843/photo/sloth-bear-melursus-ursinus-ranthambore-national-park-india-wild-sloth-bear-nature-habitat.jpg?s=612x612&w=0&k=20&c=C1THyQ17cpZjWx9ORpH9cgZfjCAAaJi0WtDrOWJdK9w="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.aito.com/images/holidays/311246/sri-lanka-wildlife-tour-2770414.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-yellow-300 px-8 py-3 text-center font-medium text-black hover:bg-yellow-400 font-bold"
              >
                Booking Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
       



    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Share Your Experience With Us.</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            write your best experience and your comment .
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
               
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>





    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold leading-7 text-gray-900">Explore Sri Lanka in Comfort with</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           TAPROBANA CAB SERVICE
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Reliable and Affordable Taxi Services for Tourists.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    



    
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
 
    </div>

             
  
   </div>

    
  )
}