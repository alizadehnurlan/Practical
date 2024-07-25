import React from 'react'
import Heading from '../../Components/Heading'
import { blog } from '../../Components/Data/dummydata'

const Blog = () => {
    return (
        <>
            <section className='blog'>
                <div className="container">
                    <Heading title={Blog} />
                    <div className='content grid3'>
                        {

                            blog.map((val) => {
                                return (
                                    <div key={val.id} className="box" data-aos='flip-left'>
                                        <div className="img" data-aos='flip-up'>
                                            <img src={val.cover} data-aos='flip-down' />
                                        </div>
                                        <div className="text">
                                            <h3 data-aos='flip-right'>
                                                {val.title}
                                            </h3>
                                            <label data-aos='flip-left'>
                                                By {val.author} {val.date}
                                            </label>
                                            <p data-aos='fade-up-right'>{val.desc}</p>
                                        </div>
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

export default Blog