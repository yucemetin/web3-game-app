import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { setAmount } from '../redux/tictactoeGame';
import { setSettingModal } from '../redux/tictactoeGame'
import { RadioGroup } from '@headlessui/react'
import { ethers } from "ethers"
import Lock from "../artifacts/contracts/Lock.sol/Lock.json"
import { setBoard } from '../redux/tictactoeGame'
import { wait } from '@testing-library/user-event/dist/utils';
import languages from "../language.json"
import { setPayTransaction } from '../redux/tictactoeGame'

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"


export default function GameSetting() {


    let [amount, setAmountt] = useState('0.1')
    const { payTransaction } = useSelector(state => state.animation)

    async function setPlayer() {

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, Lock.abi, signer)

        const transaction = await contract.betPlayer(account, { value: ethers.utils.parseEther(amount) })
        await transaction.wait()

        contract.on("TransactionPay",(arr,event) => {
            let info = {
                arr: arr,
                data: event
            }
            let temp = [...info.arr]
            temp[temp.length -1] = [...temp[temp.length -1], Date.now(), 0]
            const newTemp = JSON.parse(localStorage.getItem("payTransaction")) === null ? [] : JSON.parse(localStorage.getItem("payTransaction"))

            newTemp.push(temp[temp.length -1])
                   
            //info.arr sadece son elemanı al
            dispatch(setPayTransaction(newTemp))
        })
    }
   
    const navigate = useNavigate()

    const { theme } = useSelector(state => state.theme)
    const { settingModal } = useSelector(state => state.game)
    const { account } = useSelector(state => state.game)
    const { currentLanguage } = useSelector(state => state.animation)



    const dispatch = useDispatch()

    function closeModal() {
        dispatch(setSettingModal(false))
    }

    const startGame = async () => {
        try {
            const transaction = await setPlayer()
            // eslint-disable-next-line
            const receipt = await wait(transaction)
            
            dispatch(setAmount(amount))
            dispatch(setBoard(Array(9).fill("")))
            dispatch(setSettingModal(false))
            navigate("/tic-tac-toe")
            
            
        } catch (e) {
            console.log(e.message)
        }

    }

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
                                        className={`text-lg font-medium leading-6 ${theme ? 'text-gray-900' : 'text-white'} text-center`}
                                    >
                                        {languages[currentLanguage][0].setting}
                                    </Dialog.Title>
                                    <div className="my-10 flex gap-x-4 justify-center items-center">

                                        <RadioGroup className={'flex gap-x-4'} value={amount} onChange={setAmountt}>
                                            <RadioGroup.Option value="0.1">
                                                {({ checked }) => (
                                                    <button className={` border-2 ${checked ? `bg-green-400 border-green-400 ${theme ? 'text-white' : 'text-violet-500'}` : `${theme ? ' border-violet-500 text-violet-500' : 'border-white text-white'}`}  rounded-lg flex items-center justify-center p-2`} >0.1 <img className='w-5 h-5' src="/ethereum.svg" alt="" /></button>
                                                )}
                                            </RadioGroup.Option>
                                            <RadioGroup.Option value="0.2">
                                                {({ checked }) => (
                                                    <button className={` border-2 ${checked ? `bg-green-400 border-green-400 ${theme ? 'text-white' : 'text-violet-500'}` : `${theme ? ' border-violet-500 text-violet-500' : 'border-white text-white'}`}  rounded-lg flex items-center justify-center p-2`} >0.2 <img className='w-5 h-5' src="/ethereum.svg" alt="" /></button>
                                                )}
                                            </RadioGroup.Option>
                                            <RadioGroup.Option value="0.5">
                                                {({ checked }) => (
                                                    <button className={` border-2 ${checked ? `bg-green-400 border-green-400 ${theme ? 'text-white' : 'text-violet-500'}` : `${theme ? ' border-violet-500 text-violet-500' : 'border-white text-white'}`}  rounded-lg flex items-center justify-center p-2`} >0.5 <img className='w-5 h-5' src="/ethereum.svg" alt="" /></button>
                                                )}
                                            </RadioGroup.Option>
                                            <RadioGroup.Option value="1.0">
                                                {({ checked }) => (
                                                    <button className={` border-2 ${checked ? `bg-green-400 border-green-400 ${theme ? 'text-white' : 'text-violet-500'}` : `${theme ? ' border-violet-500 text-violet-500' : 'border-white text-white'}`}  rounded-lg flex items-center justify-center p-2`} >1.0 <img className='w-5 h-5' src="/ethereum.svg" alt="" /></button>
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
                                            {languages[currentLanguage][0].play}
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
