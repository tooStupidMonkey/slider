import React, {useCallback} from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { imagePath } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import {setActiveElement, removeImage, updateImage, updateActiveSlide} from '../../store/slider/actions';

const ImageWrap = styled.div`
  background: black;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: ${ props => props.border ? '3px' : '0'} solid mediumturquoise;
  opacity: ${props => props.active ? 0.5 : 1};
  flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  
    }
`;

const Image = ({src, alt, styles, imageKey, draggable}) => {
  const dispatch = useDispatch();
  const activeElement = useSelector(state => state.sliderApp.activeElement);
  const activeSlide = useSelector(state => state.sliderApp.activeSlide);

  const onDragStart = useCallback(() => {
    dispatch(setActiveElement(imageKey))
  });

  const rightClickHandle = (e) => {
    e.preventDefault();
    dispatch(removeImage(imageKey))
  }

  const onDragoverHandler = (event) => {
    event.preventDefault();
  }

  const onDragEnd = (event, key) => {
    dispatch(updateImage(key));
    dispatch(setActiveElement(null));
    return false;
  }

  const handleActiveSlide = (e, key) => {
    e.preventDefault()
    dispatch(updateActiveSlide(key));
  }

  return (
    <ImageWrap
      onDragOver = {!draggable ? onDragoverHandler : undefined} 
      onDrop = {!draggable ? (event) => onDragEnd(event, imageKey) : undefined}
      border={(activeElement === 0 || activeElement) && !draggable}
      active={!draggable && activeSlide === imageKey}
      onClick={!draggable ? (e) => handleActiveSlide(e, imageKey)  : undefined}
    >
      { src && <img 
        onDragStart={onDragStart}
        onDrop={draggable ? ()=>dispatch(setActiveElement(null)) : undefined}
        onDragEnd={draggable ? ()=>dispatch(setActiveElement(null)) : undefined}
        onContextMenu={!draggable ? rightClickHandle : undefined}
        draggable={draggable} 
        src={imagePath(src)} 
        alt={alt} 
        style={styles} 
      />}
    </ImageWrap>
  );
}

Image.defaultProps = {
  alt: 'Image', 
  styles: {},
  draggable: false
}

Image.propTypes = {
  src: PropTypes.string,
  imageKey: PropTypes.number.isRequired,
  alt: PropTypes.string,
  styles: PropTypes.object,
  draggable: PropTypes.bool,
};

export default Image;