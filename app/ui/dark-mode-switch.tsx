'use client';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { useDarkMode } from 'usehooks-ts';

const DarkModeSwitch = () => {
  const { isDarkMode, toggle } = useDarkMode(true);
  return (
    <Switch
      checked={isDarkMode}
      onChange={toggle}
      className={clsx(
        isDarkMode ? 'bg-purple-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
      )}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        className={clsx(
          isDarkMode ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        )}
      >
        <span
          className={clsx(
            isDarkMode ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          )}
          aria-hidden="true"
        >
          ☀️
        </span>
        <span
          className={clsx(
            isDarkMode ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          )}
          aria-hidden="true"
        >
          🌙
        </span>
      </span>
    </Switch>
  );
};

export default DarkModeSwitch;
