import Carousel from 'react-bootstrap/Carousel';
import car1 from './car1.jpg';
import polish from './polish.jpg';
import exterior1 from './exterior1.jpg';

function HomeCarousel() {

  return (
    <container className='MyCarousel'>
    <Carousel className='myCara'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car1}
          alt="car image"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={polish}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exterior1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </container>
  );
}

export default HomeCarousel;