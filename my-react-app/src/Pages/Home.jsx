import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

  


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