import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function CorouselExample() {
  return (
    <div class="carousel-parent">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"
          alt="First slide"
          style={{height:'80vh'}}
        />
        <Carousel.Caption>
          <h3>60% DISCOUNTS ON HOMES</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/full-length-portrait-happy-family_171337-2281.jpg?w=2000"
          alt="Second slide"
          style={{height:'80vh'}}
        />

        <Carousel.Caption>
          <h3>BUY 2 GET 1 FREE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg"
          alt="Third slide"
          style={{height:'80vh'}}
        />

        <Carousel.Caption>
          <h3>WINTER COLLECTION SALE AT FLAT 50%</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CorouselExample;