// import './ControlledCarousel.css'
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";


const ControlledCarousel = ({images}) => {

  return (

      <Carousel showArrows={true}>

        {images.map( (image, i) =>
          <img key={i} src={image} alt={"Project image "+i} 
          style={{maxWidthx:"500px"}}/>
        )}

      </Carousel>

  );
}


export default ControlledCarousel