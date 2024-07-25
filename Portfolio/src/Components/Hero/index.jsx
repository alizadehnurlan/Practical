import { home } from '../Data/dummydata'
import { Typewriter } from 'react-simple-typewriter'



const Hero = () => {
    return (
        <>
            <section className='hero'>
                {
                    home.map(({ text, name, post, design, desc, id }) => {
                        return (
                            <div key={id} className='heroContainer'>
                                <h3 data-aos='fade-right'>
                                    {text}
                                </h3>
                                <h1 >
                                    <Typewriter
                                        words={['Nurlan Alizadeh', 'Web Developer']}
                                        loop={true}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p data-aos='fade-right'> {desc}</p>
                                <button data-aos='fade-up-right' className='primaryBtn'>Download CV</button>

                            </div>
                        )

                    })
                }

            </section>
        </>
    )
}

export default Hero