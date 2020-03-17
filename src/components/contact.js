import React from 'react';
import './contactStyle.css';
export const Contact  = (props)=>{
    return(
        <div id='contact'>
            <h1>Get In Touch</h1>
            <ul>
                <li><input type='text' placeholder='Enter Your name'/></li>
                <li><input type='text' placeholder='Enter Your email'/></li>
                <li><input type='text' placeholder='Enter Your phone'/></li>
                <li><textarea rows="6" cols="89" placeholder='Enter your message'/></li>
            </ul>
            <button className='btn'>Send</button>
        </div>
    )
}