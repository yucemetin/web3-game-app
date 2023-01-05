import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function GamesSlider() {
    const settings = {
        className: "center flex gap-x-4",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1500,
        afterChange: (current) => setActive(current),
        focusOnSelect: (click) => setActive(click),
    };

    const [active, setActive] = useState(0)
    let index0 = "", index1 = "", index2 = "", index3 = "", index4 = ""

    const setRotate = () => {
        if (active === 4) {
            index0 = 'rotate-12'
            index3 = '-rotate-12'
        
        } else if (active === 0) {
            index4 = "-rotate-12"
            index1 = "rotate-12"
        }
        else if (active === 1) {
            index0 = "-rotate-12"
            index2 = "rotate-12"
        }
        else if (active === 2) {
            index1 = "-rotate-12"
            index3 = "rotate-12"
        }
        else if (active === 3) {
            index2 = "-rotate-12"
            index4 = "rotate-12"
        }
    }

    useEffect(() => {
        setRotate()
        // eslint-disable-next-line
    }, [active])

    return (
        <div className='w-full'>
            <Slider className='flex gap-x-5' {...settings}>
                <div className={'w-[300px] h-[500px] relative '}>
                    <img src="/vader.jpg" alt="" className={active === 0 ? 'cover w-[250px] h-[350px] opacity-75 transition-all rounded-md absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-md origin-bottom ${index0}`} />
                </div>
                <div className={'w-[300px] h-[500px] relative'}>
                    <img src="/monkey.webp" alt="" className={active === 1 ? 'cover w-[250px] h-[350px] opacity-75 transition-all rounded-md absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-md origin-bottom ${index1}`} />
                </div>
                <div className={'w-[300px] h-[500px] relative'}>
                    <img src="/monkey1.webp" alt="" className={active === 2 ? 'cover w-[250px] h-[350px] opacity-75 transition-all rounded-md absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-md origin-bottom ${index2}`} />
                </div>
                <div className={'w-[300px] h-[500px] relative'}>
                    <img src="/monkey2.jpeg" alt="" className={active === 3 ? 'cover w-[250px] h-[350px] opacity-75 transition-all rounded-md absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-md origin-bottom ${index3}`} />
                </div>
                <div className={'w-[300px] h-[500px] relative'}>
                    <img src="/monkey3.avif" alt="" className={active === 4 ? 'cover w-[250px] h-[350px] opacity-75 transition-all rounded-md absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : `w-[150px] h-[200px] opacity-75 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 rounded-md origin-bottom ${index4}`} />
                </div>
            </Slider>
        </div>

    )
}
