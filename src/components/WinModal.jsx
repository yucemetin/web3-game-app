import React, { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Confeti from './Confeti'
import { setConfeti } from '../redux/theme'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setSettingModal } from '../redux/tictactoeGame'
import { setBoard } from '../redux/tictactoeGame'
import languages from "../language.json"

export default function WinModal() {

    const [isOpen, setIsOpen] = useState(true)
    const { theme } = useSelector(state => state.theme)
    const { currentLanguage } = useSelector(state => state.animation)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const playHandle = () => {
        setIsOpen(false)
        dispatch(setConfeti(false))
        dispatch(setSettingModal(true))
        dispatch(setBoard(Array(9).fill("")))
    }

    const mainHandle = () => {
        setIsOpen(false)
        dispatch(setConfeti(false))
        navigate("/games")
    }

    const closeModal = () => {
        setIsOpen(false)
        dispatch(setConfeti(false))
    }

    useEffect(() => {
        dispatch(setConfeti(true))

        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
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
                                        className={`text-lg font-medium leading-6 ${theme ? 'text-white' : 'text-white'} text-center`}
                                    >
                                        {languages[currentLanguage][0].win}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className={`text-sm ${theme ? 'text-white/70' : 'text-gray-300'} `}>
                                            {languages[currentLanguage][0].win2}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={playHandle}
                                        >
                                            {languages[currentLanguage][0].playagain}
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={mainHandle}
                                        >
                                            {languages[currentLanguage][0].main}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Confeti />
        </>
    )
}
