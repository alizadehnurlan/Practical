import React from 'react'
import { project } from '../../Components/Data/dummydata'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <>
    <div className='hero counter'>
        <div className="container grid3 grid4">
            {
                project.map((item,i)=>{
                    return(
                        <div key={i} className='box'>
                            <i>{item.icon}</i>
                            <h1 className='heading'>
                            <CountUp end={item.num} duration={2} />
                            </h1>
                            <h3>{item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Counter