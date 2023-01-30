import React, { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from "react-redux"
import { setRpsModal } from '../redux/tictactoeGame'
import { setRpsChoose } from '../redux/tictactoeGame'
import languages from "../language.json"

export default function SelectRPS() {

    const { theme } = useSelector(state => state.theme)
    const { currentLanguage } = useSelector(state => state.animation)
    const { rpsmodal } = useSelector(state => state.game)

    const dispatch = useDispatch()

    function closeModal() {
        dispatch(setRpsModal(false))
    }

    return (
        <>
            <Transition appear show={rpsmodal} as={Fragment}>
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
                                <Dialog.Panel className={`w-full flex flex-col gap-y-10 max-w-3xl transform overflow-hidden rounded-2xl ${theme ? 'bg-gradient-to-r from-[#2E67DC]/80 to-[#D325C7]/80' : 'bg-gray-800'} p-6 text-center align-middle shadow-xl transition-all`}>
                                    <Dialog.Title
                                        as="h3"
                                        className={`text-lg font-medium leading-6 ${theme ? 'text-white' : 'text-white'} `}
                                    >
                                        {languages[currentLanguage][0].metamask}
                                    </Dialog.Title>
                                    <div className="mt-2 flex items-center justify-center gap-x-16 w-full h-full">
                                        <button onClick={() => dispatch(setRpsChoose("rock"))} className='w-1/3 h-1/2 hover:border rounded-xl px-4 py-4'><img src="/rock.svg" alt="" /></button>
                                        <button onClick={() => dispatch(setRpsChoose("paper"))} className='w-1/3 h-1/2 hover:border rounded-xl px-4 py-4'><img src="/paper.svg" alt="" /></button>
                                        <button onClick={() => dispatch(setRpsChoose("scissors"))} className='w-1/3 h-1/2 hover:border rounded-xl px-4 py-4'><img src="/scissors.svg" alt="" /></button>
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
