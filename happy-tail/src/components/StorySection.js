import React, { Component } from 'react';
import '../components/StorySection.scss';
import GoogleReviewsWidget from 'google-reviews-widget'
import review from '../components/images/pet_review.png';
import review2 from '../components/images/pet_review2.png';
import review3 from '../components/images/pet_review3.png';
import ImageGallery from 'react-image-gallery';


class StorySection extends Component {
   
   render() { 
           const image = [
               {original:review,},
               {original:review2},
               {original:review3},
           ]
        
        return ( 
        <div className="red-section">
                <div className="row display-red">
                    <div className="col-md-6 mt-3 review">
                        <div>
                        <h1 className="text-white red-heading mt-1">Trusted Pet Sitting, Peace of Mind for You</h1>
                        </div>
                    
                        <GoogleReviewsWidget instanceId='lFz0Pb6oIobiza2Yzgu5'/>
                        <hr/>
                        <p className=" text-white story-description">I’ve always loved animals, and after years of helping friends and neighbors care for their pets, I decided to turn my passion into a small business where I can give pets the same love and attention I give my own.</p>
                    </div>
                    <div className="col-md-6">
                        <div>
                       <div className="logo" ><ImageGallery  additionalClass="logo"className="logo" showThumbnails={false} autoPlay={true} showBullets={true} showNav={false} showFullscreenButton={false} showPlayButton={false} items={image}>
                        </ImageGallery></div>
                        {/*<p className="h2 text-white story-description">I’ve always loved animals, and after years of helping friends and neighbors care for their pets, I decided to turn my passion into a small business where I can give pets the same love and attention I give my own.</p>*/}
                        </div>
                    </div>
                </div>
        </div> );
    }
}
 
export default StorySection;