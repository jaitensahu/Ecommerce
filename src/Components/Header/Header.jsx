import React, { memo, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  HeartIcon,
  MoonIcon,
  ShoppingCartIcon,
  SunIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoIosSearch } from "react-icons/io";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLogin,
  setIsDark,
  setIsOpen,
  setWishListOpen,
} from "../../Redux/Slices/HeaderSlice";
import { signUpFunction } from "../../Redux/Slices/AuthSlice";
import logo from '../../assets/Logo.png'

const Header = () => {
  const navigation = [
    { name: "Your Profile", href: "#", current: true },
    { name: "Cart", href: "#", current: false },
    { name: "Wishlist", href: "#", current: false },
    { name: "Dark Mode", href: "#", current: false },
  ];
  let { currentUser } = useSelector((state) => state.AuthSlice);
  let navigateTo = useNavigate();
  const params = window.location.pathname;
  const dispatch = useDispatch();
  const { isLogin, isDark, isOpen, isWishListOpen } = useSelector(
    (state) => state.headerSlice
    
  );


  useEffect(() => {
    if (params != "/") {
      navigateTo(params);
    }
    if (
      Object.keys(currentUser).length !== 0 ||
      Object.keys(JSON.parse(localStorage.getItem("currentUser") || "{}"))
        .length
    ) {
      dispatch(setIsLogin(true));
      navigateTo("/");
    } else {
      dispatch(setIsLogin(false));
    }
  }, [currentUser]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  return (
    <Disclosure as="nav" className=" z-10 w-screen">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-[0.7] items-center  sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="h-8 w-auto scale-125"
                      src={logo}
                      alt="Your Company"
                    />
                  </a>
                </div>
              </div>

              <div className="icon  justify-between w-[35%] min-[628px]:flex max-[628px]:hidden text-white">
                <div className="absolute inset-y-0 right-0 flex text-white items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
                  <button
                    onClick={() => dispatch(setIsOpen(!isOpen))}
                    type="button"
                    className="relative rounded-full p-1 text-white "
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <IoIosSearch className="h-8 w-8" aria-hidden="true" />
                  </button>
                  <Drawer
                    open={isOpen}
                    onClose={() => dispatch(setIsOpen(!isOpen))}
                    direction="top"
                    className="bla bla bla"
                    style={{ height: "180px" }}
                  >
                    <div className="h-5">
                      <div className="searchBar flex max-w-[70%] mx-auto items-center justify-between border-2 rounded-[50px] px-3 mt-8">
                        <input
                          type="text"
                          placeholder="Enter Your Keywords"
                          className="w-full outline-none bg-transparent px-2"
                        />
                        <IoIosSearch className="h-8 w-8" />
                      </div>
                    </div>
                  </Drawer>

                  <button
                    onClick={() => dispatch(setWishListOpen(!isWishListOpen))}
                    type="button"
                    className="relative rounded-full p-1 focus:outline-none focus:ring-2  focus:ring-offset-2 "
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <HeartIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                  <Drawer
                    open={isWishListOpen}
                    onClose={() => dispatch(setWishListOpen(!isWishListOpen))}
                    direction="right"
                    className="bla bla bla"
                  >
                    <div className="h-5">
                      <div className="searchBar flex max-w-[70%] mx-auto items-center justify-between border-2 rounded-sm mt-8">
                        <input
                          type="text"
                          placeholder="Enter Your Keywords"
                          className="w-full outline-none"
                        />
                        <IoIosSearch className="h-8 w-8" />
                      </div>
                    </div>
                  </Drawer>
                  <Link
                    to="/cart"
                    type="button"
                    className="relative rounded-full p-1"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <ShoppingCartIcon className="h-8 w-8 text-white" aria-hidden="true" />
                  </Link>
                  {/* Profile dropdown */}
                  {isLogin ? (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full text-sm ">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                onClick={() =>
                                  dispatch(signUpFunction({ action: "LOGOUT" }))
                                }
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-0.5 ">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <UserCircleIcon
                            className="h-8 w-8"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/Login"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Login
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/signup"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                SignUp
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </div>
                {/* Dark Mode / Light Mode button */}
                <div onClick={() => dispatch(setIsDark(!isDark))}>
                  {isDark ? (
                    <button
                      type="button"
                      className="relative rounded-full  p-1 text-white"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>

                      <SunIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="relative rounded-full p-1 text-gray-400 hover:text-white  "
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Moon Icon</span>

                      <MoonIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>

              <div className=" inset-y-0 left-0  items-center  max-[628px]:flex min-[628px]:hidden">
                {/* Mobile menu button*/}
                <div>
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div>
                  <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </div>
              </div>

              {/* --------------------------- */}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default memo(Header);
