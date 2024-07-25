import { about } from '../../Components/Data/dummydata'
import Heading from '../../Components/Heading'

const About = () => {
    return (
        <>
            <section className='about'>
                {
                    about.map((val, i) => {
                        return (
                            <div key={i} className='container flex'>
                                <div className='left' >
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className='right' data-aos='fade=down-left'>
                                    <Heading title='About Me' />
                                    <p>{val.desc}</p>
                                    <p>{val.desc1}</p>
                                    <button >Download CV</button>
                                    <button className='primaryBtn'>Download CV</button>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default About