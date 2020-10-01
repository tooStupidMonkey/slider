import React from 'react';
import styled from 'styled-components';
import Image from '../common/Image';
import { useSelector } from 'react-redux';

const ImagesWrap = styled.div`
  height: 228px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #eee;
  margin-left: 10px;
  padding: 20px;
  overflow-y: auto;
  }
`;

const ImageLabel = styled.div`
  content: 'Images';
  border: 1px solid #eee;
  border-radius: 5px 5px 0 0;
  padding: 0 25px;
  height: 31px;
  display: flex;
  align-items: center;
  background: #eaeaea;
  margin-left: 10px;
  max-width: 101px;
`;

const ImagesLibrary = () => {
  const images = useSelector(state => state.sliderApp.allImages);

  return (
    <>
      <ImageLabel>
        Images
      </ImageLabel>
      <ImagesWrap>
        {
          images.map((image, key) => <Image draggable={true} imageKey={key} key={key} {...image} />)
        }
      </ImagesWrap>
    </>
  );
}

export default ImagesLibrary;