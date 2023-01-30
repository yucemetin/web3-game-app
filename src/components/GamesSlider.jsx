import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { setActive } from '../redux/tictactoeGame'
import { useDispatch, useSelector } from "react-redux"

export default function GamesSlider({slidesToShow}) {

    const dispatch = useDispatch()
    const { active } = useSelector(state => state.game)

    const settings = {
        className: "center flex gap-x-4",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesToShow,
        speed: 500,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        afterChange: (current) => dispatch(setActive(current)),
        focusOnSelect: (click) => dispatch(setActive(click)),
    };

    const [index0, setIndex0] = useState("")
    const [index1, setIndex1] = useState("")
    const [index2, setIndex2] = useState("")
    const [index3, setIndex3] = useState("")
    const [index4, setIndex4] = useState("")

    const setRotate = () => {
        if (active === 4) {
            setIndex0('rotate-12 mt-18')
            setIndex1('rotate-12 mt-24')
            setIndex2('-rotate-12 mt-24')
            setIndex3('-rotate-12 mt-18')
        } else if (active === 0) {
            setIndex4('-rotate-12 mt-18')
            setIndex1('rotate-12 mt-18')
            setIndex2('rotate-12 mt-24')
            setIndex3('-rotate-12 mt-24')
        }
        else if (active === 1) {
            setIndex0('-rotate-12 mt-18')
            setIndex4('-rotate-12 mt-24')
            setIndex2('rotate-12 mt-18')
            setIndex3('rotate-12 mt-24')

        }
        else if (active === 2) {
            setIndex0('-rotate-12 mt-24')
            setIndex1('-rotate-12 mt-18')
            setIndex4('rotate-12 mt-24')
            setIndex3('rotate-12 mt-18')
        }
        else if (active === 3) {
            setIndex0('rotate-12 mt-24')
            setIndex1('-rotate-12 mt-24')
            setIndex2('-rotate-12 mt-18')
            setIndex4('rotate-12 mt-18')
        }
    }

    useEffect(() => {
        setRotate()
        
        // eslint-disable-next-line
    }, [active])

    return (
        <div className='w-full z-10 block'>
            <Slider className='flex gap-x-7 xsma:gap-x-5' {...settings}>
                <div className={'w-[300px] h-[500px] relative '}>
                    <img src="/tictactoe.jpeg" alt="" className={active === 0 ? 'object-cover w-[250px] h-[350px] opacity-75 transition-all duration-500 rounded-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-lg origin-bottom ${index0} object-cover`} />
                    <p className='opacity-0'>asdasd</p>
                </div>
                <div className={'w-[300px] h-[500px] relative'}>
                    <img src="/rps.jpeg" alt="" className={active === 1 ? 'object-cover w-[250px] h-[350px] opacity-75 transition-all duration-500  rounded-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-xl origin-bottom ${index1} object-cover`} />
                    <p className='opacity-0'>asdasd</p>
                </div>
                <div className={'w-[300px] h-[500px] relative'}>
                    <img src="/game1.jpeg" alt="" className={active === 2 ? 'object-cover w-[250px] h-[350px] opacity-75 transition-all duration-500 rounded-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-xl origin-bottom ${index2} object-cover`} />
                    <p className='opacity-0'>asdasd</p>
                </div>
                <div className={'w-[300px] h-[500px] relative'}>
                    <img src="/game2.jpeg" alt="" className={active === 3 ? 'object-cover w-[250px] h-[350px] opacity-75 transition-all duration-500 rounded-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-xl origin-bottom ${index3} object-cover`} />
                    <p className='opacity-0'>asdasd</p>
                </div>
                <div className={'w-[300px] h-[500px] relative'}>
                    <img src="/game3.jpeg" alt="" className={active === 4 ? 'object-cover w-[250px] h-[350px] opacity-75 transition-all duration-500 rounded-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-xl origin-bottom ${index4} object-cover`} />
                    <p className='opacity-0'>asdasd</p>
                </div>
            </Slider>
        </div>

    )
}
