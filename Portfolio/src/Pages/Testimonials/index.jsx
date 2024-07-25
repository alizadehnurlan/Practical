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
                                        <i>
                                            <FormatQuote />
                                            <p>
                                                {val.text}
                                            </p>
                                            <div className='img'>
                                                <img src={val.image} />
                                            </div>
                                            <h3>{val.name}</h3>
                                            <label>{val.post}</label>
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