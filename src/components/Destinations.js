import React from 'react'
import image1 from '../assets/image1.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

const Destinations = () => {
    return (
    <>
        <section className='grid'>
            <h3>We are currently in 46 countries!</h3>

            <div className='grid-items'>
                <div>
                <img src={image1} alt='' />
                <h4>Fly to Aruba</h4>
                <p>is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard</p>
                </div>

                <div>
                <img src={image3} alt='' />
                <h4>Experience Mombasa</h4>
                <p>is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard</p>
                </div> 

                <div>
                <img src={image4} alt='' />
                <h4>Savour Hawaii</h4>
                <p>is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard</p>
                </div>
           </div>            
        </section>
     </>
    )
}

export default Destinations
