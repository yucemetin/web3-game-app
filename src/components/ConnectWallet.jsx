import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from "react-redux"
import { setWalletModal } from '../redux/tictactoeGame'
import languages from "../language.json"

export default function ConnectWallet() {

  const { walletModal } = useSelector(state => state.game)
  const { theme } = useSelector(state => state.theme)
  const { currentLanguage } = useSelector(state => state.animation)

  const dispatch = useDispatch()

  function closeModal() {
    dispatch(setWalletModal(false))
  }

  return (
    <>
      <Transition appear show={walletModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl ${theme ? 'bg-gradient-to-r from-[#2E67DC]/80 to-[#D325C7]/80' : 'bg-gray-800'} p-6 text-center align-middle shadow-xl transition-all`}>
                  <Dialog.Title
                    as="h3"
                    className={`text-lg font-medium leading-6 text-white text-center`}
                  >
                    {languages[currentLanguage][0].nowallet}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className={`text-sm ${theme ? 'text-white/80' : 'text-gray-300'} `}>
                      {languages[currentLanguage][0].connectwallet}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      {languages[currentLanguage][0].close}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
