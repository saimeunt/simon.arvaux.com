'use client';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import DarkModeSwitch from '@/app/ui/dark-mode-switch';

const Navbar = () => (
  <Popover className="relative bg-white/80 shadow backdrop-blur dark:bg-neutral-900/80">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="#home">
          <span className="sr-only">Man Technologist Emoji</span>
          <span className="text-5xl">👨🏻‍💻</span>
        </a>
      </div>
      <div className="-my-2 -mr-2 md:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 dark:bg-neutral-700 dark:hover:text-white">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Group as="nav" className="hidden space-x-10 md:flex">
        <a
          href="#services"
          className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          Portfolio
        </a>
        <a
          href="#work"
          className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          Work
        </a>
        <a
          href="#contact"
          className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          Contact
        </a>
      </Popover.Group>
      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <DarkModeSwitch />
      </div>
    </div>
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-neutral-700 dark:bg-neutral-800">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <a href="#home">
                <span className="sr-only">Man Technologist Emoji</span>
                <span className="text-5xl">👨🏻‍💻</span>
              </a>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-white">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="px-5 py-6">
            <div className="grid grid-cols-4 gap-4">
              <a
                href="#services"
                className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Portfolio
              </a>
              <a
                href="#work"
                className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Contact
              </a>
            </div>
            <div className="mt-6">
              <DarkModeSwitch />
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Navbar;
