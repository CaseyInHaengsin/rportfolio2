import './Main.css';
import React from 'react';
import portfolio from '../assets/portfolio';



const MainDisplay2 = () => {
    return (
        <div className="ui grid">
        <div className="row">
            <div className="column padding-reset">
                <div className="ui huge message page grid">
                    <img src={portfolio} id="portfolio-image"></img>
                    <h1 className="ui huge header name">Casey</h1>
                    <p id="intro">I am a Professional Services Engineer at Instructure - a SAAS company - that emphasizes in educational technology. I am a passionate learner that enjoys solving problems.</p>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default MainDisplay2;