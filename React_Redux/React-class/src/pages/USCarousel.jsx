import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, } from "react-bootstrap-icons";

const USCarousel = () => {
  const sliders = [
    {
      id: 1,
      image: "https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg",
      title: "First slide label",
      para: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 2,
      image: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
      title: "Second slide label",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image:
        "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
      title: "Third slide label",
      para: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];
  const [index, setIndex] = useState(0);
  const  sliderRef = useRef()

  const nextSlide = () => {
    sliderRef.current.next()
  };

  const prevSlide = () => {
    sliderRef.current.prev()
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        ref={sliderRef}
        indicators={false}
        onSelect={(i) => setIndex(i)}
        prevIcon={<ArrowLeftCircle size={25} />}
        nextIcon={<ArrowRightCircle size={25} />}
      >
        {sliders.map((slider) => {
          return (
            <Carousel.Item key={slider.id}>
              <Image src={slider.image} fluid />
              <Carousel.Caption>
                <h3>{slider.title}</h3>
                <p>{slider.para}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div>
        <div className="d-flex justify-content-center mt-3">
          {sliders.map((slider, i) => (
            <div
              key={slider.id}
              onClick={() => setIndex(i)}
              className={`bullet ${index === i ? "active-bullet" : ""}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button onClick={prevSlide} className="btn btn-primary me-3">
          <ArrowLeft className="me-1"/>
          Prev
        </button>

        <button onClick={nextSlide} className="btn btn-primary">
          Next
          <ArrowRight className="ms-1"/>
        </button>
      </div>
    </div>
  );
};

export default USCarousel;
