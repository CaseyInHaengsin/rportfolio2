import React from 'react';
import ReactDOM from 'react-dom';
import MainDisplay2 from './components/MainDisplay2';
import 'semantic-ui-css/semantic.min.css'

const App = () => {
   
    return (
        <div>
            <MainDisplay2 />
    
    <div className="ui hidden divider"></div>
    <div className="ui page grid">
        <div className="three column row">
            <div className="column">
                <h2 className="ui header">Professional Services Engineer</h2>
                <h4>March 2020 - Present</h4>
                <p>A Professional Services Engineer develops and maintains Ruby on Rails web applications using test-driven development to support internal and external clients' needs.</p>
                
            </div>
            <div className="column">
                <h2 className="ui header">Technical Consultant</h2>
                <h4>June 2019 - March 2020</h4>
                <p>The Technical Consultant is responsible for providing expert consultation and solution implementation for a customer's technical configurations of Canvas LMS, Canvas Studio, and Canvas Catalog. The Technical Consultant consults with internal and external clients, developing creative solutions.</p>
                
            </div>
            <div className="column">
                <h2 className="ui header">Implementation Consultant</h2>
                <h4>June 2018 - June 2019</h4>
                <h4></h4>
                <p>A SaaS Implementation Consultant leads existing and new clients through the technical aspects of implementation, focusing on data provisioning, content migration, authentication, and branding. Working with clients through the execution, monitoring, and controlling stages of implementation.</p>
                
            </div>
        </div>
        <div className="row">
            <div className="column">
                <div className="ui divider"></div> 
            </div>
        </div>
    </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));