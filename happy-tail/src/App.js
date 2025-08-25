import React, {Component} from 'react';
import './App.css';
import ScrollSnap from 'scroll-snap'
import NavTool from './components/NavTool';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';


function callback(){
  console.log('snapped')
}
class App extends React.Component{

   
  
  container = React.createRef();

      bindScrollSnap() {
        const element = this.container.current;
        // Only enable scroll snap on larger screens
        if (window.innerWidth > 768) {
          const snapElement = new ScrollSnap(element, {
            snapDestinationY: '100%',
          });
          snapElement.bind(callback);
        }
      }
    componentDidMount(){
      this.bindScrollSnap();
      // Add resize listener for responsive behavior
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      // Clean up resize listener
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      // Re-bind scroll snap on resize
      this.bindScrollSnap();
    }
      
    
        render(){
        return (
          <div className="App">
            <NavTool />
           
              <div id="container" ref={this.container}>
               
                <HeroSection />
                <StorySection/>
                <ServicesSection/>
                <ContactSection/>
              </div>
               
          </div>
        );

  }
}


export default App;
