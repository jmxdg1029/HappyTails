import React, { Component } from 'react';
import '../components/StorySection.scss';



class StorySection extends Component {
    componentWillUnmount(){
        document.querySelector('.see-demo').onmousemove = function (e) {

            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
        
            e.target.style.setProperty('--x', x + 'px');
            e.target.style.setProperty('--y', y + 'px');
        };
    }
    
    
    render(){ 
        
        return ( 
        <div className="red-section">
                <div className="row display-red">
                    <div className="col-md-6 mt-3">
                        <div>
                        <h1 className="text-white red-heading mt-5">SUPERIOR SOUND</h1>
                        <p className="h1 red-description">Experience live version of your favourite songs.</p>
                        </div>
                        <button className="see-demo"><a href="#" ><span>SEE DEMO</span></a></button>
                    </div>
                    <div className="col-md-6 ">
               
                        <div className="cicle-click "><a href="#" className="click"  style={{fontSize:"1.7em"}}>CLICK</a></div>
                    </div>
                </div>
        </div> );
    }
}
 
export default StorySection;