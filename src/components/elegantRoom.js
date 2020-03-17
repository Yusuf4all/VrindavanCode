import React from 'react';
import './elegantRoomStyle.css';
export const ElegantRoom = (props) => {
    return (
        <div id='elegantRoom'>
            <h1>ELEGANT ROOM</h1>
            <h3>Unpretentious Luxury</h3>
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-xl-4'>
                    <div>
                    <i className="fas fa-smoking-ban"></i>
                        <h6>Smoking Free</h6>
                        <p>Planning and support can help you quit for good. Before your quit day, take time to prepare for challenges. Make a plan for quitting.</p>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 col-xl-4'>
                    <div>
                    <i className="fas fa-couch"></i>
                        <h6>King Beds</h6>
                        <p>Planning and support can help you quit for good. Before your quit day, take time to prepare for challenges. Make a plan for quitting.</p>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 col-xl-4'>
                    <div>
                    <i className="fas fa-ship"></i>
                        <h6>Yatch Rental</h6>
                        <p>Planning and support can help you quit for good. Before your quit day, take time to prepare for challenges. Make a plan for quitting.</p>
                        </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-xl-4'>
                    <div>
                    <i className="fas fa-cocktail"></i>
                        <h6>Welocme Drink</h6>
                        <p>Planning and support can help you quit for good. Before your quit day, take time to prepare for challenges. Make a plan for quitting.</p>
                        </div>
                </div>
                <div className='col-md-4 col-lg-4 col-xl-4'>
                    <div>
                    <i className="fas fa-swimmer"></i>
                        <h6>Swimming Pool</h6>
                        <p>Planning and support can help you quit for good. Before your quit day, take time to prepare for challenges. Make a plan for quitting.</p>
                        </div>
                </div>
                <div className='col-md-4 col-lg-4 col-xl-4'>
                    <div>
                    <i className="fas fa-utensils"></i>
                        <h6>Food Included</h6>
                        <p>Planning and support can help you quit for good. Before your quit day, take time to prepare for challenges. Make a plan for quitting.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}