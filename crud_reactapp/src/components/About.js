import React, {Component} from 'react';

class About extends Component {

  render(){
    return (
        <div>
            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.2491365268256!2d107.53336620396216!3d16.450288613906263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a7e216953565%3A0x45a8bad36988d658!2zU8OzYyBCYWJ5IFNob3AgLSBUaOG7nWkgVHJhbmcgVHLhursgRW0sIMSQ4buTIFPGoSBTaW5o!5e0!3m2!1svi!2s!4v1562252416048!5m2!1svi!2s" 
                title= "map"
                frameBorder={0} 
                style={{border: 0}} 
                allowFullScreen 
            />
        </div>
      );
    }
  }
  export default About;


