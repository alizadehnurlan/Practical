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
                                    <div key={val.id} className="box">
                                        <div className="img">
                                            <img src={val.cover} />
                                        </div>
                                        <div className="text">
                                            <h3>
                                                {val.title}
                                            </h3>
                                            <label>
                                               By {val.author} {val.date}
                                            </label>
                                            <p>{val.desc}</p>
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