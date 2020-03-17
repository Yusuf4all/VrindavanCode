import React from 'react';
import './roomsStyle.css';
export const Rooms = (props) => {
    return (
        <div id='room'>
            <h1>VRINDA ANANDAM ROOMS</h1>
            <div className='aboutRooms'>
                <div className='imgOfRoom'>
                    <img src='https://www.tripsavvy.com/thmb/HsxOlvGgwRYCEWX5JBG97nKjJnI=/1280x853/filters:no_upscale():max_bytes(150000):strip_icc()/11171290-5b8fdb0b46e0fb0025ac8898.jpg' alt=''/>
                </div>
                <div className='descOfRoom'>
                    <h3>SUPER DELUXE ROOMS</h3>
                    <p>Vrindavan is a holy town in Uttar Pradesh, northern India. The Hindu deity Krishna is said to have spent his childhood here. It’s home to temples, many dedicated to Krishna and his lover, the deity Radha. At Banke Bihari Temple, the curtain in front of Krishna’s statue is opened and closed every few minutes. At Radha Raman Temple, a gold plate beside Krishna signifies Radha. Prem Mandir is a huge white marble temple.</p>
                </div>
            </div>
            <div className='aboutRooms'>
                <div className='descOfRoom'>
                    <h3>PREMIUEM ROOMS</h3>
                    <p>Vrindavan is a holy town in Uttar Pradesh, northern India. The Hindu deity Krishna is said to have spent his childhood here. It’s home to temples, many dedicated to Krishna and his lover, the deity Radha. At Banke Bihari Temple, the curtain in front of Krishna’s statue is opened and closed every few minutes. At Radha Raman Temple, a gold plate beside Krishna signifies Radha. Prem Mandir is a huge white marble temple.</p>
                </div>
                <div className='imgOfRoom'>
                    <img src='https://pix10.agoda.net/hotelImages/2608078/-1/bdb569d513ae3f9c64a56f133a953e4c.jpg' alt=''/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='spa'>
                        <img src='https://www.assavaphuket.com/wp-content/uploads/2019/03/75-Villa-Assava-Phuket-Spa-Room.jpg' alt='SPA'/>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='restaurant'>
                    <img src='https://media-cdn.tripadvisor.com/media/photo-s/16/8b/89/a9/wnetrze-amber-room.jpg' alt='RESTAURANT'/>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='pool'>
                    <img src='https://luxurypools.com/wp-content/uploads/2018/04/house-with-indoor-swimming-pool-ufodigestpast-com-awesome-bar_indoor-pool-house_interior-design-ideas-for-living-room-home-firms-inner-decoration-commercial-pools-decorating-webs.jpg' alt='POOL'/>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='activities'>
                    <img src='https://www.rajeducational.com/images/activities-room/gallery-img/img41.png' alt='ACTIVITIES'/>
                    </div>
                </div>
            </div>
        </div>
    )
}