import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useSelector } from "react-redux"
import languages from "../language.json"

export default function About() {

  const { theme } = useSelector(state => state.theme)
  const { currentLanguage } = useSelector(state => state.animation)

  return (
    <div className="w-full 3xsma:px-12 xxsma:px-20 xsma:px-32 py-16">
      <div className="w-full rounded-2xl bg-white/30 p-2 shadow-3xl about">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg ${theme ? 'bg-purple-100 text-purple-900 hover:bg-purple-200' : 'bg-black/50 text-gray-200 hover:bg-black'}  px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                <span>{languages[currentLanguage][0].q1}</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 ${theme ? 'text-purple-500' : 'text-gray-200'}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                {languages[currentLanguage][0].a1}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg ${theme ? 'bg-purple-100 text-purple-900 hover:bg-purple-200' : 'bg-black/50 text-gray-200 hover:bg-black'}  px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                <span>{languages[currentLanguage][0].q2}</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 ${theme ? 'text-purple-500' : 'text-gray-200'}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                {languages[currentLanguage][0].a2}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg ${theme ? 'bg-purple-100 text-purple-900 hover:bg-purple-200' : 'bg-black/50 text-gray-200 hover:bg-black'}  px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                <span>{languages[currentLanguage][0].q3}</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 ${theme ? 'text-purple-500' : 'text-gray-200'}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                {languages[currentLanguage][0].a3}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg ${theme ? 'bg-purple-100 text-purple-900 hover:bg-purple-200' : 'bg-black/50 text-gray-200 hover:bg-black'}  px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                <span>{languages[currentLanguage][0].q4}</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 ${theme ? 'text-purple-500' : 'text-gray-200'}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                {languages[currentLanguage][0].a4}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg ${theme ? 'bg-purple-100 text-purple-900 hover:bg-purple-200' : 'bg-black/50 text-gray-200 hover:bg-black'}  px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                <span>{languages[currentLanguage][0].q5}</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 ${theme ? 'text-purple-500' : 'text-gray-200'}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                {languages[currentLanguage][0].a5}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg ${theme ? 'bg-purple-100 text-purple-900 hover:bg-purple-200' : 'bg-black/50 text-gray-200 hover:bg-black'}  px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                <span>{languages[currentLanguage][0].q6}</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 ${theme ? 'text-purple-500' : 'text-gray-200'}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                {languages[currentLanguage][0].a6}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg ${theme ? 'bg-purple-100 text-purple-900 hover:bg-purple-200' : 'bg-black/50 text-gray-200 hover:bg-black'}  px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                <span>{languages[currentLanguage][0].q7}</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 ${theme ? 'text-purple-500' : 'text-gray-200'}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                {languages[currentLanguage][0].a7}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
