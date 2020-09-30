import React, {useState, useRef, useMemo, useEffect} from "react";
import styled from 'styled-components';
import Controlls from './Controlls';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { imagePath } from '../../utils/helpers';

const SlideshowWrap = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 2px solid #eee;
  margin-right: 10px;
  .slick-slide {
    img {
      height: 157px;
      width: 100%;
    }
  }
  .slick-dots {
    bottom: 0;
    z-index: 10000000000;
    li button:before {
      color: white;
    }
    button : {
      &:before {

        color: white;
      }
    }
  }
`;

const Slide = ({src}) => {
  return (
    <div>
      <img src={imagePath(src)}/>
    </div>
  );
}

const SlideshowPlayer = () => {
  const images = useSelector(state => state.sliderApp.activeImages);
  const [imageWithPlaceholder, setPlaceholder] = useState(images);
  const [settings, setSettings] = useState({        
    dots: true,
    speed:500,
    infinite:true,
    autoplay:true,
    arrows: false
  })
  const slider = useRef(null);

  useEffect(()=>{
    const newImages = images.map(image =>  {
      if (image && !image.src) {
        image.src = 'placeholder.png';
      } else if (!image) {
        return {src: 'placeholder.png'}
      }
      return image;
    });
    setPlaceholder(newImages)
  }, [images]);


  return (
    <SlideshowWrap> 
      <Slider
        ref={slider}
        {...settings}
      >
        { 
          imageWithPlaceholder.map((image, key)=>(
            <Slide key={key} src={image.src} />
          ))
        }
      </Slider>
      <Controlls slider={slider.current}  />
    </SlideshowWrap>
  );
}

export default SlideshowPlayer;