import React, { useState } from 'react'
import { portfolio } from '../../Components/Data/dummydata'
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import Heading from '../../Components/Heading'

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]

const Portfolio = () => {

    const [list, setLists] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)

    const filterItems = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setLists(newItems)
        if (category === "all") {
            setLists(portfolio)
            return
        }
    }

    

    return (
        <>
            <article>
                <div className='container'>
                    <Heading title='Portfolio' />
                    <div className='catButton'>
                        {category.map((category, i) => (
                            <button key={i} className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className='content grid3'>
                        {list.map((item, i) => (
                            <div key={i} className='box' data-aos='fade-up'>
                                <div className='img'>
                                    <img src={item.cover} alt='' />
                                </div>
                                <div className='overlay'>
                                    <h3>{item.title}</h3>
                                    <span>{item.name}</span>
                                    <VisibilityOutlinedIcon />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Portfolio