import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { setAmount } from '../redux/tictactoeGame';
import { setSettingModal } from '../redux/tictactoeGame'
import { RadioGroup } from '@headlessui/react'
import { ethers } from "ethers"
import Lock from "../artifacts/contracts/Lock.sol/Lock.json"


const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"


export default function GameSetting() {



    const [xx, setXx] = useState()

    async function getPlayer() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(contractAddress, Lock.abi, provider)

        const data = await contract.getPlayerCount()

        console.log(data)
    }

    async function setPlayer() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, Lock.abi, signer)

        const transaction = await contract.setPlayerCount()
        await transaction.wait()

        setXx(await getPlayer())

    }


    const navigate = useNavigate()

    const { theme } = useSelector(state => state.theme)
    const { settingModal } = useSelector(state => state.game)

    let [amount, setAmountt] = useState('0.1')

    const dispatch = useDispatch()

    function closeModal() {
        dispatch(setSettingModal(false))
    }

    const startGame = () => {
        dispatch(setAmount(amount))

        navigate("/tic-tac-toe")
        setPlayer()
    }

    useEffect(()=> {
        setPlayer()
        console.log(xx)
    },[])

    return (
        <>
            <Transition appear show={settingModal} as={Fragment}>
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
                                <Dialog.Panel className={`w-full max-w-2xl transform overflow-hidden rounded-2xl ${theme ? 'bg-white' : 'bg-gray-800'} p-6 text-left align-middle shadow-xl transition-all`}>
                                    <Dialog.Title
                                        as="h3"
                                        className={`text-lg font-medium leading-6 ${theme ? 'text-gray-900' : 'text-white'} `}
                                    >
                                        Game Settings
                                    </Dialog.Title>
                                    <div className="my-10 flex gap-x-4">
                                        <input readOnly value={amount} className='outline-0 px-2 w-[8%] rounded-lg border-2 border-pink-500' type="text" />

                                        <RadioGroup className={'flex gap-x-4'} value={amount} onChange={setAmountt}>
                                            <RadioGroup.Option value="0.1">
                                                {({ checked }) => (
                                                    <button className={` border-2 ${checked ? 'bg-green-400 border-green-400 text-violet-500' : 'border-white text-white'}  rounded-lg flex items-center justify-center p-2`} >0.1 <img className='w-5 h-5' src="/ethereum.svg" alt="" /></button>
                                                )}
                                            </RadioGroup.Option>
                                            <RadioGroup.Option value="0.2">
                                                {({ checked }) => (
                                                    <button className={` border-2 ${checked ? 'bg-green-400 border-green-400 text-violet-500' : 'border-white text-white'}  rounded-lg flex items-center justify-center p-2`} >0.2 <img className='w-5 h-5' src="/ethereum.svg" alt="" /></button>
                                                )}
                                            </RadioGroup.Option>
                                            <RadioGroup.Option value="0.5">
                                                {({ checked }) => (
                                                    <button className={` border-2 ${checked ? 'bg-green-400 border-green-400 text-violet-500' : 'border-white text-white'}  rounded-lg flex items-center justify-center p-2`} >0.5 <img className='w-5 h-5' src="/ethereum.svg" alt="" /></button>
                                                )}
                                            </RadioGroup.Option>
                                            <RadioGroup.Option value="1.0">
                                                {({ checked }) => (
                                                    <button className={` border-2 ${checked ? 'bg-green-400 border-green-400 text-violet-500' : 'border-white text-white'}  rounded-lg flex items-center justify-center p-2`} >1.0 <img className='w-5 h-5' src="/ethereum.svg" alt="" /></button>
                                                )}
                                            </RadioGroup.Option>
                                        </RadioGroup>
                                    </div>
                                    <div className="mt-4 flex justify-center items-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={startGame}
                                        >
                                            Play
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
