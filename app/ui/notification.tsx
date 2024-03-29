'use client';
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';

import useContext from '@/app/ui/context/hook';

const Notification = () => {
  const {
    state: { notificationOpen, notificationSuccess },
    closeNotification,
  } = useContext();
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={notificationOpen}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-800 dark:ring-neutral-700">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notificationSuccess ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  ) : (
                    <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
                  )}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                    {notificationSuccess ? 'Thanks for your message!' : 'Oops!'}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {notificationSuccess
                      ? "I'll get back to you as soon as possible 😃"
                      : 'Something went wrong 🤔'}
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:bg-neutral-800 dark:hover:text-white"
                    onClick={closeNotification}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Notification;
