import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import Avatar from 'react-avatar';
import { auth } from '../Pages/firebase'; // Ensure you have the correct path
import { TiShoppingCart } from "react-icons/ti";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pet Supplies', href: '/category/pet-supplies' },
  { name: 'Home And Garden', href: '/category/home-and-garden' },
  { name: 'Fashion Style', href: '/category/fashion' },
 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const renderAvatar = () => {
    if (user?.email) {
      return <Avatar name={user.email} size="40" round />;
    }
    return <Avatar name="User" size="40" round />;
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                    className={classNames(
                      location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6 hover:text-[#1bbd61]" />
            </button>

            {isLoggedIn ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    {renderAvatar()}
                  </Menu.Button>
                </div>
                <Menu.Items
                  as="div"
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/dashboard"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/settings"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleSignOut}
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} w-full text-left`}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <button
                onClick={() => window.location.href = '/login'}
                className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Login</span>
                <span className="text-gray-300">Login</span>
              </button>
            )}
            {/* Cart Icon */}
            <Link to="/cart" className="ml-4">
                <TiShoppingCart className="h-6 w-6 text-gray-300 hover:text-[#1bbd61]" />
              </Link>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={location.pathname === item.href ? 'page' : undefined}
              className={classNames(
                location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
          <Link to="/cart" className="flex items-center">
            <TiShoppingCart className="h-6 w-6 text-gray-500 hover:text-[#1bbd61]" />
            <span className="ml-2 text-gray-300">Cart</span>
          </Link>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
