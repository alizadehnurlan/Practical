import React from 'react'
import { testimonials } from '../../Components/Data/dummydata'
import { FormatQuote } from '@mui/icons-material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className='testimonials hero'>
                <div className='container'>
                    <Slider {...settings}>
                        {
                            testimonials.map((val) => {
                                return (
                                    <div key={val.id} className='box'>
                                        <i data-aos='zoom-out-up'>
                                            <FormatQuote />
                                            <p data-aos='zoom-out-down'>
                                                {val.text}
                                            </p>
                                            <div className='img'>
                                                <img data-aos='zoom-out-rigt' src={val.image} />
                                            </div>
                                            <h3 data-aos='zoom-out-left'>{val.name}</h3>
                                            <label data-aos='zoom-out'>{val.post}</label>
                                        </i>
                                    </div>
                                )
                            })
                        }


                    </Slider>

                </div>

            </section>

        </>
    )
}

export default Testimonials