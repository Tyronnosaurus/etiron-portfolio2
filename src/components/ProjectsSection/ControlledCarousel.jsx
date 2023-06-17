import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";


const ControlledCarousel = ({images}) => {

  return (

      <Carousel showArrows={true}>

        {images.map( (image, i) =>
          <div className='h-[400px] bg-dark'>
            <img key={i} src={image} alt={"Project image "+i} 
                 className='h-full object-contain'/>
          </div>
        )}

      </Carousel>

  );
}


export default ControlledCarousel