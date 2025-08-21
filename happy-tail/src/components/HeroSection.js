import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/HeroSection.scss';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import image1 from '../components/images/HTHS_banner(1).png';
import image2 from '../components/images/HTHS_banner(1).png';
import image3 from '../components/images/HTHS_banner(1).png';

class HeroSection extends Component {
    render() { 
        const image = [
            {original:image1,}
        ]
        return (
            <div className="hero-section">
                {/*react-image-gallery object:cover, erased max-height: calc(100vh - 80px); */}
                <ImageGallery  additionalClass="hero-slide"className="hero-slide" showThumbnails={false} autoPlay={true} showBullets={true} showNav={false} showFullscreenButton={false} showPlayButton={false} items={image}>
                </ImageGallery>
           
        </div>
        );
    }
}
 
export default HeroSection;