import React from 'react'
import './Plans.css'

function Plans() {
    const pricingData =[{
        title : 'Regular member',
        price : '$0',
        duration : '/month',
        color : "#fff",
        features : ['unlimited access to the courses ',
        ,'customer support',
        'personal mentor',
        'Standard options',
        '5 classes per week'

    ]},
    {
        title : 'Premium member',
        price : '$1000',
        duration : '/month',
        color : "#gf55f2",
        features : ['unlimited access to the courses ',
        ,'customer support',
        'personal mentor',
        'Standard options',
        '5 classes per week'

    ]},
    {
        title : 'Standard member',
        price : '$10',
        duration : '/month',
        color : "#fff",
        features : ['unlimited access to the courses ',
        ,'customer support',
        'personal mentor',
        'Standard options',
        '5 classes per week'

    ]}
]
    
  return (
    <div className='container'>
        <div className=' price-topper'>
            <div className='price-details'>
            <h2>Premium Pricing Plan</h2>
            <p>
                unlock elite services with our premium plan and sour ahead of the competition

            </p>
            </div>

        </div>
        <div className='price-wrapper'>
            {pricingData.map((datas , index)=>(

         
            <div class="card">
            <div className='pricing_item' key = {index}>
                <div className='pricing_card_top' style={{ backgroundColor: datas.color }}>
                    <h2 className='session-tittle'>{datas.title}</h2>
                    <h2 className='session-pricing-tittle'>
                    {datas.price} <span>{datas.duration}</span>
                    </h2>

                </div>
  
            <div className='services'>
            {datas.features.map((feature , index)=>(
                <ul>
                    <li key={index}>{feature}</li>
                </ul>
            ))}
            <div className='btns'>
            <button className='registration-btn'>Join Now</button>
            </div>
            </div>
            </div>
            </div>
        ))}
             </div>
      
    </div>
  )
}

export default Plans
