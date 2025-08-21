import React, {Componenet} from 'react';
import './App.css';
import ScrollSnap from 'scroll-snap'
import NavTool from './components/NavTool';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ContactSection from './components/ContactSection';


function callback(){
  console.log('snapped')
}
class App extends React.Component{

   
  
  container = React.createRef();

      bindScrollSnap() {
      const element = this.container.current
      const snapElement = new ScrollSnap(element, {
        snapDestinationY: '100%',
      })
      snapElement.bind(callback)
    }
    componentDidMount(){
      this.bindScrollSnap()
    }
      
    
        render(){
        return (
          <div className="App">
            <NavTool />
           
              <div id="container" ref={this.container}>
               
                <HeroSection />
                <StorySection/>
                <ContactSection/>
              </div>
               
          </div>
        );

  }
}


export default App;
