import React, { Component } from 'react';
import '../components/ServicesSection.scss';
import img1 from '../components/images/1.png';
import img2 from '../components/images/2.png';
import img3 from '../components/images/3.png';

class Servicesection extends Component {
    
    render() { 
        return ( 
        <div className="perks-section">
            <div className="container">
            
                <div className="row display-perk">
                    <div className="col red-desc ">
                            <img src={img1} className='img1'/>
                            <hr className="red-hr" />
                            <h2 className="">Location</h2>
                            <p className="text-white mt-3">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className="col mt-5 blue-desc">
                           <img src={img2} className='img2'/>
                            <hr className="mt-5 blue-hr" />
                            <h2 className="">Services</h2>
                            <p className="text-white mt-4">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className="col mt-5 yellow-desc">
                            <img src={img3} className='img3'/>
                            <hr className=" mt-5 yellow-hr" />
                            <h2 className="">Packages</h2>
                            <p className="text-white mt-4">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default Servicesection;