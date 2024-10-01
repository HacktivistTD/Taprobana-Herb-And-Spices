import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from "react-icons/fa";
import wing from  '../Images/wing.png';

const About = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Sample data for cards
  const cards = [
    { id: 1, 
      title: "The Thaprobain Organic Spices", 
      description: "At the beginning of our newly invested business we are taking orders in the range of 2kgs or lower. We use the most secured manufacturing processes and hygienic packaging methods. Orders will be delivered within 11-23 business days, with free shipping for any order."
    },
    { id: 2, 
      title: "Our Location", 
      description: "Sri Lanka, known for its breathtaking beauty and rich biodiversity, is blessed with a tropical monsoon climate, perfect for cultivating the world’s finest spices. Our village, Morawaka in the Matara District, is close to the Sinharaja Rainforest."
    },
    { id: 3, 
      title: "Why We Are Different", 
      description: "Unlike other spice companies, we do not source raw materials from external parties. Our spices are grown and harvested by us, ensuring unmatched quality and authenticity."
    },
    { id: 4, 
      title: "Our Secret", 
      description: "We follow special spice recipes passed down through generations. We ensure our products are free from artificial flavors and colorings, offering customers the option to customize their blends."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-10 relative isolate overflow-hidden bg-gray-600 py-24 sm:py-32">
      <img
        src={wing}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <motion.div
            key={card.id}
            layoutId={card.id}
            onClick={() => setSelectedId(card.id)}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.h2 className="text-lg font-semibold">{card.title}</motion.h2>
            <motion.p className="text-sm text-gray-500">{card.description}</motion.p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 bg-white p-8 rounded-lg shadow-xl z-50 flex flex-col justify-center items-center max-w-xl mx-auto"
            style={{ height: '125%' }}
            initial={{ opacity: 0, height: '100%' }}
            animate={{ opacity: 1, height: '125%' }}
            exit={{ opacity: 0, height: '100%' }}
          >
            {/* Close button */}
            <motion.button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 bg-purple-100 p-2 rounded-full hover:bg-purple-200"
            >
              <FaTimes className="text-purple-700" />
            </motion.button>

            {/* Selected card details */}
            {cards.map(card => card.id === selectedId && (
              <div key={card.id} className="w-full text-center">
                <motion.h2 className="text-2xl font-bold mb-4">{card.title}</motion.h2>
                <motion.p className="text-lg text-gray-600">{card.description}</motion.p>
                <div className="mt-6 flex justify-between items-center text-gray-500">
                  {/* Placeholder for additional content */}
                  <span className="block">Additional info here</span>
                  <span className="block">More info here</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
