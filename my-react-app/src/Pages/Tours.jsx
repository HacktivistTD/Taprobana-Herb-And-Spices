import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Down South',
    href: '#',
    imageSrc: 'https://media-cdn.tripadvisor.com/media/photo-s/16/b5/e9/ca/the-coconut-tree-hills.jpg',
    imageAlt: "Down South",
  },
  {
    id: 2,
    name: 'Ella',
    href: '#',
    imageSrc: 'https://us.lakpura.com/cdn/shop/files/demodara-nine-arch-bridge-ella-sri-lanka-scaled-1_77c0b1eb-4170-472a-b6df-950903726734.jpg?v=1654085052&width=3840',
    imageAlt: "Ella",
  },
  {
    id: 3,
    name: 'Airport',
    href: '#',
    imageSrc: 'https://afar.brightspotcdn.com/dims4/default/2e75953/2147483647/strip/false/crop/3000x1692+0+0/resize/1486x838!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F9e%2Ff3%2Fddc4b2314dd9b1e7f4d96f5b35ef%2Fshutterstock-1772148014.jpg',
    imageAlt: "Airport",
  },
  {
    id: 4,
    name: 'Udawalawa',
    href: '#',
    imageSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/20/c8/7a/caption.jpg?w=500&h=400&s=1',
    imageAlt: "Udawalawa",
  },
  {
    id: 5,
    name: 'Sigiriya',
    href: '#',
    imageSrc: 'https://ychef.files.bbci.co.uk/1280x720/p0b7n6dm.jpg',
    imageAlt: "Sigiriya",
  },
  {
    id: 6,
    name: 'Trinco',
    href: '#',
    imageSrc: 'https://trincoconf.tc.esn.ac.lk/wp-content/uploads/2022/06/trincomalee-places-to-visit-1.jpg',
    imageAlt: "Trinco",
  },
  {
    id: 7,
    name: 'Jaffna',
    href: '#',
    imageSrc: 'https://mahaweli.lk/wp-content/uploads/2023/10/Jaffna-Fort-Sri-Lanka.jpg',
    imageAlt: "Jaffna",
  },
  {
    id: 8,
    name: 'Yala National Park',
    href: '#',
    imageSrc: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/dining_wellness/yala-national-park-1090-2710.jpeg',
    imageAlt: "Yala National Park",
  },
];

const LocationSelector = () => {
  const locations = [
    "Airport",
    "Matara",
    "Colombo",
    "Kandy"
  ];

  const vehicleTypes = [
    "Mini Car",
    "Hatchback Car",
    "Sedan Car",
    "Mini Van",
    "Van",
    "Mini Bus",
    "Bus"
  ];

  const prices = {
    "Airport-Matara": { "Mini Car": 59, "Hatchback Car": 65, "Sedan Car": 70, "Mini Van": 85, "Van": 95, "Mini Bus": 110, "Bus": 130 },
    "Matara-Airport": { "Mini Car": 59, "Hatchback Car": 65, "Sedan Car": 70, "Mini Van": 85, "Van": 95, "Mini Bus": 110, "Bus": 130 },
    "Airport-Colombo": { "Mini Car": 30, "Hatchback Car": 35, "Sedan Car": 40, "Mini Van": 55, "Van": 65, "Mini Bus": 80, "Bus": 100 },
    "Colombo-Airport": { "Mini Car": 30, "Hatchback Car": 35, "Sedan Car": 40, "Mini Van": 55, "Van": 65, "Mini Bus": 80, "Bus": 100 },
    "Airport-Kandy": { "Mini Car": 70, "Hatchback Car": 75, "Sedan Car": 80, "Mini Van": 95, "Van": 105, "Mini Bus": 120, "Bus": 140 },
    "Kandy-Airport": { "Mini Car": 70, "Hatchback Car": 75, "Sedan Car": 80, "Mini Van": 95, "Van": 105, "Mini Bus": 120, "Bus": 140 },
    "Matara-Colombo": { "Mini Car": 40, "Hatchback Car": 45, "Sedan Car": 50, "Mini Van": 65, "Van": 75, "Mini Bus": 90, "Bus": 110 },
    "Colombo-Matara": { "Mini Car": 40, "Hatchback Car": 45, "Sedan Car": 50, "Mini Van": 65, "Van": 75, "Mini Bus": 90, "Bus": 110 },
    "Matara-Kandy": { "Mini Car": 80, "Hatchback Car": 85, "Sedan Car": 90, "Mini Van": 105, "Van": 115, "Mini Bus": 130, "Bus": 150 },
    "Kandy-Matara": { "Mini Car": 80, "Hatchback Car": 85, "Sedan Car": 90, "Mini Van": 105, "Van": 115, "Mini Bus": 130, "Bus": 150 },
    "Colombo-Kandy": { "Mini Car": 50, "Hatchback Car": 55, "Sedan Car": 60, "Mini Van": 75, "Van": 85, "Mini Bus": 100, "Bus": 120 },
    "Kandy-Colombo": { "Mini Car": 50, "Hatchback Car": 55, "Sedan Car": 60, "Mini Van": 75, "Van": 85, "Mini Bus": 100, "Bus": 120 }
  };

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [price, setPrice] = useState(null);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    if (e.target.value && to && vehicleType) {
      setPrice(prices[`${e.target.value}-${to}`][vehicleType]);
    }
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
    if (from && e.target.value && vehicleType) {
      setPrice(prices[`${from}-${e.target.value}`][vehicleType]);
    }
  };

  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
    if (from && to && e.target.value) {
      setPrice(prices[`${from}-${to}`][e.target.value]);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Our Main Tours . .</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="text-center">
                  <h2 className="text-m text-gray-900 fw-bolder ">
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

      <div style={{ padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Select Your Journey</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="from" style={{ display: 'block', marginBottom: '0.5rem' }}>From</label>
          <select id="from" value={from} onChange={handleFromChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #cbd5e0' }}>
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="to" style={{ display: 'block', marginBottom: '0.5rem' }}>To</label>
          <select id="to" value={to} onChange={handleToChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #cbd5e0' }}>
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="vehicleType" style={{ display: 'block', marginBottom: '0.5rem' }}>Vehicle Type</label>
          <select id="vehicleType" value={vehicleType} onChange={handleVehicleTypeChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #cbd5e0' }}>
            <option value="">Select a vehicle type</option>
            {vehicleTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        {price !== null && (
          <div style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Price: ${price}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Tours() {
  return (
    <LocationSelector />
  );
}
