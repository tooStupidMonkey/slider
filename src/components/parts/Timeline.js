import React from 'react';
import styled from 'styled-components';
import {useSelector } from 'react-redux';
import Image from '../common/Image';

const TilelineWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid #eee;
  padding: 20px;
  margin-top: 20px;
  overflow-x: auto;
  :-moz-drag-over {
    outline: 1px solid black;
  }
`;

const Timeline = () => {
  const images = useSelector(state => state.sliderApp.activeImages);
 
  return (
    <TilelineWrap>
      { 
        images.map((image, key) => <Image imageKey={key} key={key} {...image} /> )
      }
    </TilelineWrap>
  );
}

export default Timeline;
