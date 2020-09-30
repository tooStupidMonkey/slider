import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateImage } from '../../store/slider/actions';

const EmptyWrap =  styled.div`
  width: 80px;
  height: 80px;
  background: black;
  border: 1px solid white;
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const EmptyImage = ({slotKey}) => {
  const dispatch = useDispatch();

  const onDragoverHandler = (event) => {
    event.preventDefault();
  }

  const onDragEnd = (event, key) => {
    dispatch(updateImage(key))
  }

  return (
    <EmptyWrap 
      onDragOver = {onDragoverHandler} 
      onDrop = {(event) => onDragEnd(event, slotKey)}
    />
  )
}

Image.propTypes = { 
  slotKey: PropTypes.PropTypes.number
}

export default EmptyImage;