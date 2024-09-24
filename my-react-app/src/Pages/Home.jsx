import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon } from '@heroicons/react/24/outline';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Hero  from "../Components/Hero";
import Stats from '../Components/Stats';
const features = [
  {
    name: 'Airport Transfers',
    description: 'Take the stress out of arrival with pre-booked, reliable transport directly from the airport to your hotel.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Sightseeing Tours',
    description: 'Explore Sri Lanka\'s hidden gems and iconic landmarks at your own pace with our comfortable cabs and experienced drivers.',
    icon: LockClosedIcon,
  },
  {
    name: 'City Tours',
    description: 'Discover the vibrant energy and cultural richness of Sri Lanka\'s cities with our knowledgeable drivers.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Day Trips',
    description: 'Plan hassle-free day trips to nearby attractions with our comfortable transportation.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Multi-day Tours',
    description: 'Explore Sri Lanka in style with our multi-day taxi tours tailored to your itinerary.',
    icon: ArrowPathIcon, 
  },
  {
    name: 'Shopping Sprees',
    description: 'Relax and enjoy your shopping experience in Sri Lanka. We\'ll take care of navigating the bustling streets and ensuring a safe return to your hotel with all your purchases.',
    icon: FingerPrintIcon,
  },
];

export default function Home() {
  return (
    <div className="main">
        
          <Hero/>      

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

     <Stats/>
    </div>
  );
}
