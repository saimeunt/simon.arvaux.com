'use client';
import { useState, useRef } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FormApi } from 'final-form';
import { Form as FinalForm, Field } from 'react-final-form';
import ReCAPTCHA from 'react-google-recaptcha';

import useContext from './context/hook';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const { openNotification } = useContext();
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<FormApi<FormValues, Partial<FormValues>> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (formValues: FormValues) => {
    if (!recaptchaRef.current) {
      return;
    }
    recaptchaRef.current.execute();
    /* setLoading(true);
    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    });
    setLoading(false);
    form.reset();
    openNotification(response.status === 201); */
  };
  const onReCAPTCHAChange = async (token: string | null) => {
    if (!token || !recaptchaRef.current || !formRef.current) {
      return;
    }
    setLoading(true);
    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formRef.current.getState().values, captcha: token }),
    });
    setLoading(false);
    recaptchaRef.current.reset();
    formRef.current.reset();
    openNotification(response.status === 201);
  };
  return (
    <FinalForm
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, values, form }) => {
        formRef.current = form;
        return (
          <form
            className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <div className="mt-1">
                <Field
                  name="firstName"
                  render={({ input }) => (
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-white dark:bg-neutral-800 dark:text-white"
                      required
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <span id="last-name-optional" className="text-sm text-gray-500">
                  Optional
                </span>
              </div>
              <div className="mt-1">
                <Field
                  name="lastName"
                  render={({ input }) => (
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-white dark:bg-neutral-800 dark:text-white"
                      aria-describedby="last-name-optional"
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="mt-1">
                <Field
                  name="email"
                  render={({ input }) => (
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-white dark:bg-neutral-800 dark:text-white"
                      required
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <span id="phone-optional" className="text-sm text-gray-500">
                  Optional
                </span>
              </div>
              <div className="mt-1">
                <Field
                  name="phone"
                  render={({ input }) => (
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-white dark:bg-neutral-800 dark:text-white"
                      aria-describedby="phone-optional"
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <div className="mt-1">
                <Field
                  name="subject"
                  render={({ input }) => (
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-white dark:bg-neutral-800 dark:text-white"
                      required
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <span id="message-max" className="text-sm text-gray-500">
                  {values.message
                    ? `${500 - values.message.length} characters remaining`
                    : 'Max. 500 characters'}
                </span>
              </div>
              <div className="mt-1">
                <Field
                  name="message"
                  render={({ input }) => (
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-white dark:bg-neutral-800 dark:text-white"
                      aria-describedby="message-max"
                      maxLength={500}
                      required
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-700 hover:text-purple-500"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-700 hover:text-purple-500"
                >
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end">
              <ReCAPTCHA
                ref={recaptchaRef}
                // badge="inline"
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onReCAPTCHAChange}
              />
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:w-auto"
              >
                {loading ? 'Sending…' : 'Submit'}
              </button>
            </div>
          </form>
        );
      }}
    />
  );
};

const ContactSection = () => (
  <section id="contact" className="scroll-mt-24 bg-gray-100 dark:bg-neutral-900">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative bg-white shadow-xl dark:bg-neutral-800">
        <h2 className="sr-only">Contact me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Contact information */}
          <div className="relative overflow-hidden bg-purple-700 px-6 py-10 sm:px-10 xl:p-12">
            <h3 className="text-lg font-medium text-white">Contact information</h3>
            <p className="mt-6 max-w-3xl text-base text-purple-50">
              Have a project in mind?
              <br />
              Send me a message here or connect with me on LinkedIn to tell me more about what we
              could accomplish together.
            </p>
            <dl className="mt-8 space-y-6">
              <dt>
                <span className="sr-only">Email</span>
              </dt>
              <a
                onClick={() => {
                  const firstName = document.querySelector('#first-name') as HTMLInputElement;
                  firstName.focus();
                }}
                className="cursor-pointer text-gray-200 hover:text-white"
              >
                <dd className="flex text-base">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span className="ml-3">Contact me</span>
                </dd>
              </a>
              <dt>
                <span className="sr-only">LinkedIn</span>
              </dt>
              <a
                href="https://www.linkedin.com/in/simon-arvaux/"
                className="text-gray-200 hover:text-white"
              >
                <dd className="flex text-base">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 448 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ml-3">LinkedIn profile</span>
                </dd>
              </a>
            </dl>
          </div>
          <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Send me a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
