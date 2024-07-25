import React from 'react'
import Heading from '../../Components/Heading'
import { services } from '../../Components/Data/dummydata'

const Services = () => {
    return (
        <>
            <section className='services'>
                <div className='container'>
                    <Heading title='Services' />
                    <div className='content grid3'>
                        {
                            services.map((item, i) => {
                                return (
                                    <div key={i} className='box'>
                                        <i>{item.icon}</i>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services