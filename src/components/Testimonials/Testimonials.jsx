import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'

function Testimonials() {
  return (
    <div className='t-wrapper'>
      <div className="container">
        <div className="t-container">
            <div className="t-head">
                <span className='tag'>Depoimentos</span>
                <span className='title'>Acesse capital que complementa as opções de financiamento tradicionais</span>
                <span className="des">O que as pessoas dizem sobre nós</span>
            </div>
        </div>

        {/* slider */}
        <SlickSlider />  
      </div>
    </div>
  )
}

export default Testimonials
